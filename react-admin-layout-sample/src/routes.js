import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import DashboardLayout from "./layouts/Dashboard";
import PresentationPage from "./pages/Presentation";
import ErrorLayout from "./layouts/Error";

export default [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/presentation" />,
  },
  {
    path: "/errors",
    component: ErrorLayout,
    routes: [
      {
        path: "/errors/error-401",
        exact: true,
        component: lazy(() => import("src/pages/Error401")),
      },
      {
        path: "/errors/error-404",
        exact: true,
        component: lazy(() => import("src/pages/Error404")),
      },
      {
        path: "/errors/error-500",
        exact: true,
        component: lazy(() => import("src/pages/Error500")),
      },
      {
        component: () => <Redirect to="/errors/error-404" />,
      },
    ],
  },
  {
    route: "*",
    component: DashboardLayout,
    routes: [
      {
        path: "/presentation",
        exact: true,
        component: PresentationPage,
      },
      {
        component: () => <Redirect to="/errors/error-404" />,
      },
    ],
  },
];
