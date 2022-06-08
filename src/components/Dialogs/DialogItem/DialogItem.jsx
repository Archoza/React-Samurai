import React from "react";
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={`./${props.id}`}>{props.name}</NavLink></div>
    )
}

export default DialogItem

//Todo понять почему не работают css модули, после разделения на компоненты не подтягиваются стили в DialogItem