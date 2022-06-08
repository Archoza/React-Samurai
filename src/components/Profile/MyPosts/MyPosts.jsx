import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postData = props.postsData

    let postsElements = postData.map((post, index) =>
        <Post key={index} message={post.message} likesCount={post.likesCount}/>)

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div>
                    <button>Remove post</button>
                </div>
            </div>
            <div className={classes.posts}/>
            {postsElements}
        </div>

    )
}

export default MyPosts