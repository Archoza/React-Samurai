import React from "react";
import classes from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

export default Message


//Todo понять почему не работают css модули, после разделения на компоненты не подтягиваются стили в Message
