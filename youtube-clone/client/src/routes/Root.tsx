import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Navbar from "../components/navbar/Navbar";
import "./Root.scss";
import Footer from "../components/footer/Footer";
import SubscribePage from "../pages/subscribe/SubscribePage";
import LoginPage from "../pages/login/LoginPage";
import RegisterPage from "../pages/register/RegisterPage";
import VideoUploadPage from "../pages/video/VideoUploadPage";
import withAuth from "../hoc/withAuth";
import BlogPage from "../pages/blog/BlogPage";
import VideoDetailPage from "../pages/video/VideoDetailPage";

class Root extends React.Component
{
    public render(): JSX.Element
    {
        return (
            <BrowserRouter>
                <Navbar />

                <div className="root-container">
                    <Switch>
                        <Route exact path="/" component={withAuth(HomePage, false)} />
                        <Route path="/subscribe" component={withAuth(SubscribePage, true)} />
                        <Route path="/blog" component={withAuth(BlogPage, true)} />
                        <Route path="/video/upload" component={withAuth(VideoUploadPage, true)} />
                        <Route path="/video/:videoId" component={withAuth(VideoDetailPage, false)} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <Redirect path="*" to="/" />
                    </Switch>
                </div>

                <Footer />
            </BrowserRouter>
        )
    }
}

export default Root;
