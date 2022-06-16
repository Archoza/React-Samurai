import React from 'react';
import store from "./redux/redux-store"
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {Provider} from "./storeContext";
import {BrowserRouter as Router} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <Router>
                <Provider store={store}>
                    <App />
                </Provider>
            </Router>
        </React.StrictMode>
    );


    reportWebVitals();
}


rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)


// store.subscribe(() => {
//     let state = store.getState()
//     rerenderEntireTree(state)
// })

