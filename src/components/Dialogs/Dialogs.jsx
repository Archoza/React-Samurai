import React from "react";
import classes from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>Vlad</div>
                <div className={classes.dialog}>Alina</div>
                <div className={classes.dialog}>Roma</div>
                <div className={classes.dialog}>Igor</div>
                <div className={classes.dialog}>Viktor</div>
                <div className={classes.dialog}>Andrey</div>
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