import classes from './Post.module.css'
import React from "react";

const Post = () => {
    return (
        <div className={classes.item}>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNslP7-_P7jz5MrT5yhW14y_IzBDbZZT0ag&usqp=CAU"
                    alt=""/>
                Post 1
            </div>
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post