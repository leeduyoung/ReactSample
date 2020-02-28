
import Home from "./pages/Home";
import Post from "./pages/post/Post";
import PostDetail from "./pages/post/PostDetail";

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/post',
    exact: true,
    component: Post
  },
  {
    path: '/post/:id',
    component: PostDetail
  }
];