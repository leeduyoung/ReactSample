import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import DashboardLayout from "./layouts/Dashboard";
import PresentationPage from "./pages/Presentation";
import OverviewPage from "./pages/Overview";
import DashboardDefaultPage from "./pages/Dashboard/Default"
import DashboardAnalyticsPage from "./pages/Dashboard/Analytics"
import ChangelogPage from "./pages/Changelog"
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
        path: "/overview",
        exact: true,
        component: OverviewPage,
      },
      {
        path: "/dashboards/default",
        exact: true,
        component: DashboardDefaultPage,
      },
      {
        path: "/dashboards/analytics",
        exact: true,
        component: DashboardAnalyticsPage,
      },
      {
        path: "/changelog",
        exact: true,
        component: ChangelogPage,
      },
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
