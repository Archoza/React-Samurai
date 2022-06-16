import React from 'react';
// import state, {subscribe} from "./redux/state";
// import {addPost, updateNewPostText} from "./redux/state";
// import store from "./redux/store";
import store from "./redux/redux-store"
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}
                 store={store}
            />
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

