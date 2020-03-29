import React from "react";
import { Redirect } from "react-router-dom";
import Header from "./layouts/Header";
import Home from "./pages/home/Home";
import CreateProduct from "./pages/create-product/CreateProduct";

export default [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/home" />
  },
  {
    route: "*",
    component: Header,
    routes: [
      {
        path: "/home",
        exact: true,
        component: Home
      },
      {
        path: "/create-product",
        exact: true,
        component: CreateProduct
      }
    ]
  }
];

// import React from "react";
// import Home from "./pages/Home";
// import Post from "./pages/post/Post";
// import PostDetail from "./pages/post/PostDetail";
// import { Redirect } from "react-router-dom";
// import DashboardLayout from "./layouts/Dashboard";

// export default [
//   {
//     path: "/",
//     exact: true,
//     component: () => <Redirect to="/home" />
//   },
//   {
//     route: "*",
//     component: DashboardLayout,
//     routes: [
//       {
//         path: "/home",
//         exact: true,
//         component: Home
//       },
//       {
//         path: "/post",
//         exact: true,
//         component: Post
//       },
//       {
//         path: "/post/:id",
//         component: PostDetail
//       }
//     ]
//   }
// ];
