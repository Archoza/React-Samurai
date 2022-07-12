import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";


const MyPosts = (props) => {
    let postsElements = props.posts.map((post, index) =>
        <Post key={index} message={post.message} likesCount={post.likesCount}/>)

    let onAddPost = (formData) => {
        props.addPost(formData.newPostText)

    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            <div className={classes.posts}/>
            {postsElements}
        </div>

    )
}

const AddNewPostForm = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type={'text'} name={'newPostText'} component={Textarea} validate={[required, maxLengthCreator(50)]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    </>
}


let AddNewPostReduxForm = reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts