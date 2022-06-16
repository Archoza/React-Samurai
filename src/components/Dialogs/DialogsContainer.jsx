import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//                 let state = store.getState().messagesPage
//
//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator())
//                 }
//                 let onNewMessageChange = (body) => {
//                     store.dispatch(updateNewMessageBodyCreator(body))
//                 }
//
//                 return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
//                                 messagesPage={state}/>
//
//             }}
//
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {messagesPage: state}
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: body => dispatch(updateNewMessageBodyCreator(body)),
        sendMessage: () => dispatch(sendMessageCreator())
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer