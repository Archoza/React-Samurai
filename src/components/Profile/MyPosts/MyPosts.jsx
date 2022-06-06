import classes from './MyPosts.module.css'
import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
        <div className={classes.posts}/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        </div>

    )
}

export default MyPosts