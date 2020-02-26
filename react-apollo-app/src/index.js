import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks'
import config from './configs/config'

const client = new ApolloClient({
    uri: config.apiUrl,
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Home />
        </ApolloProvider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
