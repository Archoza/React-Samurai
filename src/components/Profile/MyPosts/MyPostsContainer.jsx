import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import StoreContext from "../../../storeContext";


const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text)
                    store.dispatch(action)
                }

                return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                                posts={state.profilePage.postData}
                                newPostText={state.profilePage.newPostText}
                />
            }}

        </StoreContext.Consumer>

    )
}

export default MyPostsContainer