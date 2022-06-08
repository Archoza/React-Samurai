import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let postData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: 'It\'s my first post', likesCount: 20},
]

let dialogsData = [
    {id: 1, name: 'Vlad'},
    {id: 2, name: 'Alina'},
    {id: 3, name: 'Roma'},
    {id: 4, name: 'Igor'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Andrey'},
]
let messagesData = [
    {id: 1, message: 'hi'},
    {id: 2, message: 'how is your it?'},
    {id: 3, message: 'Yo!'},
]
root.render(
  <React.StrictMode>
    <App postData={postData} messagesData={messagesData} dialogsData={dialogsData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
