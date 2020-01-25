import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";
import Root from "./routes/Root";
import "moment/locale/ko";

const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()    
);

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>, 
    document.getElementById("root")
);

serviceWorker.unregister();