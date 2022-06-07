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
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={'Vlad'} id={'1'}/>
                <DialogItem name={'Alina'} id={'2'}/>
                <DialogItem name={'Roma'} id={'3'}/>
                <DialogItem name={'Igor'} id={'4'}/>
                <DialogItem name={'Viktor'} id={'5'}/>
                <DialogItem name={'Andrey'} id={'6'}/>
            </div>
            <div className={classes.messages}>
                <Message message={'hi'}/>
                <Message message={'how is your it?'}/>
                <Message message={'Yo!'}/>
            </div>
        </div>


    )
}

export default Dialogs