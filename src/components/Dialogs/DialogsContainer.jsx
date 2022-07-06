import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: body => dispatch(updateNewMessageBodyCreator(body)),
        sendMessage: () => dispatch(sendMessageCreator())
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer