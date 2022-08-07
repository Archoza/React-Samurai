import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const Dialogs = (props) => {
    let state = props.messagesPage
    let dialogsData = state.dialogsData
    let messagesData = state.messagesData


    let dialogsElements = dialogsData
        .map((dialog, index) =>
            <DialogItem key={index} name={dialog.name} id={dialog.id}/>)

    let messagesElements = messagesData.map((message, index) =>
        <Message key={index} message={message.message}/>)


    let AddNewMessage = (formData) => {
        props.sendMessage(formData.newMessageBody)

    }

    if (!props.isAuth) {
        return <Navigate to={"/login"}/>
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <AddMessageFormRedux onSubmit={AddNewMessage}/>
                    </div>

                </div>
            </div>
        </div>


    )
}

const AddMessageForm = (props) => {

    return <>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'newMessageBody'}
                       placeholder={'Enter your message'} validate={[required, maxLengthCreator(10)]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    </>;

}

const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs