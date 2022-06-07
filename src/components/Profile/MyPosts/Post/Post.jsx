import classes from './Post.module.css'
import React from "react";

const Post = (props) => {
    return (
        <div className={classes.item}>

            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNslP7-_P7jz5MrT5yhW14y_IzBDbZZT0ag&usqp=CAU"
                    alt=""/>
                {props.message}
            </div>
            <div>
                <span>{props.like}</span>
            </div>
        </div>
    )
}

export default Post