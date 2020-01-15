import React from 'react';
import './Root.css';
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import MemoPage from "../pages/memo/MemoPage";
import TrashPage from "../pages/trash/TrashPage";

class Root extends React.Component
{
    public render(): JSX.Element 
    {
        return (
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/memo" component={MemoPage} />
                <Route path="/trash" component={TrashPage} />
                <Redirect path="*" to="/" />
            </Switch>
        );        
    } 
}

export default Root;
