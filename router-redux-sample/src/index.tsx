import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './routes/Root';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";

const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();
