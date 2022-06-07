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


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>


    )
}

export default Dialogs