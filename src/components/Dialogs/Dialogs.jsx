import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}><NavLink to={'./1'}>Vlad</NavLink></div>
                <div className={classes.dialog}><NavLink to={'./2'}>Alina</NavLink></div>
                <div className={classes.dialog}><NavLink to={'./3'}>Roma</NavLink></div>
                <div className={classes.dialog}><NavLink to={'./4'}>Igor</NavLink></div>
                <div className={classes.dialog}><NavLink to={'./5'}>Viktor</NavLink></div>
                <div className={classes.dialog}><NavLink to={'./6'}>Andrey</NavLink></div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>hi</div>
                <div className={classes.message}>how is your it?</div>
                <div className={classes.message}>Yo!</div>

            </div>
        </div>


    )
}

export default Dialogs