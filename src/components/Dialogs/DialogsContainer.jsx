import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";


const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState().messagesPage

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }
                let onNewMessageChange = (body) => {
                    let dis_body = updateNewMessageBodyCreator(body)
                    store.dispatch(dis_body)
                }

                return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                                messagesPage={state}/>

            }}

        </StoreContext.Consumer>
    )
}

export default DialogsContainer