import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    const dialogsData = props.state.dialogsData
    const messagesData = props.state.messagesData

    let dialogsElements = dialogsData
        .map((dialog, index) =>
            <DialogItem key={index} name={dialog.name} id={dialog.id}/>)

    let messagesElement = messagesData.map((message, index) =>
        <Message key={index} message={message.message}/>)

    let newMessageElement = React.createRef()
    let addMessage = () => {
        let messageText = newMessageElement.current.value
        alert(messageText)
    }


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElement}

                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>


    )
}

export default Dialogs