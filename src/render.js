import React from 'react';
import ReactDOM from 'react-dom/client';
import {addPost, updateNewPostText} from "./redux/state";
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {


    root.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                />
        </React.StrictMode>
    );


    reportWebVitals();
}



