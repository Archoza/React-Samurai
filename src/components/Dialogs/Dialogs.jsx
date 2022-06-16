import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
    let state = props.store.getState().messagesPage
    const dialogsData = state.dialogsData
    const messagesData = state.messagesData
    const newMessageBody = state.newMessageBody

    let dialogsElements = dialogsData
        .map((dialog, index) =>
            <DialogItem key={index} name={dialog.name} id={dialog.id}/>)

    let messagesElements = messagesData.map((message, index) =>
        <Message key={index} message={message.message}/>)


    let newMessageElement = React.createRef()

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e) => {
        let body = (e.target.value).toString()
        let test = updateNewMessageBodyCreator(body)
        console.log('test', test)
        props.store.dispatch(test)


    }
    let gg = state.messagesData
    console.log(gg)


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        // ref={newMessageElement}
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder={'Enter your message'}>
                    </textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Dialogs