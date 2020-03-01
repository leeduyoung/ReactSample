import React from "react";
import Home from "./pages/Home";
import Post from "./pages/post/Post";
import PostDetail from "./pages/post/PostDetail";
import { Redirect } from "react-router-dom";
import DashboardLayout from "./layouts/Dashboard";

export default [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/home" />
  },
  {
    route: "*",
    component: DashboardLayout,
    routes: [
      {
        path: "/home",
        exact: true,
        component: Home
      },
      {
        path: "/post",
        exact: true,
        component: Post
      },
      {
        path: "/post/:id",
        component: PostDetail
      }
    ]
  }
];
