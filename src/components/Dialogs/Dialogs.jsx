import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={`./${props.id}`}>{props.name}</NavLink></div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = () => {

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

    let dialogsElements = dialogsData
        .map((dialog, index) =>
            <DialogItem key={index} name={dialog.name} id={dialog.id}/>)


    let messagesElement = messagesData.map((message, index) =>
        <Message key={index} message={message.message}/>)


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElement}
            </div>
        </div>


    )
}

export default Dialogs