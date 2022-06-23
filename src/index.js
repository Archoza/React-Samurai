import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import store from "./redux/redux-store"
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

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



