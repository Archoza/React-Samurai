import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().messagesPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (body) => {
        let dis_body = updateNewMessageBodyCreator(body)
        props.store.dispatch(dis_body)
    }


    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                 messagesPage={state}/>
    )
}

export default DialogsContainer