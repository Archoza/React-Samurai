import React from 'react';
import ReactDOM from 'react-dom/client';
import {addPost} from "./redux/state";
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';


export let rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>
    );


    reportWebVitals();
}



