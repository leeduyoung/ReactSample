import React from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom'
import { Home, About, Posts } from "./pages";

export class App extends React.Component
{
    public render(): JSX.Element
    {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/posts" onMouseOver={this.handleMouseOver.bind(this)}>Posts</Link>
                    </li>
                </ul>
                <hr/>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/posts" component={Posts} />
            </div>
        )
    }

    private handleMouseOver()
    {
        Posts.preload();
    }
}