import React from 'react';
import state, {subscribe} from "./redux/state";
import ReactDOM from 'react-dom/client';
import App from './App';
import {addPost, updateNewPostText} from "./redux/state";
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



rerenderEntireTree(state)
subscribe(rerenderEntireTree)

