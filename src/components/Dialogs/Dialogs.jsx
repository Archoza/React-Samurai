import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    const dialogsData = props.dialogsData
    const messagesData = props.messagesData

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