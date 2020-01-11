import React from 'react';
import './App.css';
import NewPost from "./pages/NewPost";
import NewComments from "./pages/NewComments";

class App extends React.Component
{
    public render(): JSX.Element
    {
        return (
            <div>
                <hr/>Post<br /><br />
                <NewPost />

                <hr/>Comments<br /><br />
                <NewComments />
            </div>
        )
    }
}

export default App;
