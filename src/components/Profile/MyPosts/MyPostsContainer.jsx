import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";


// const MyPostsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState()
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator())
//                 }
//
//                 let onPostChange = (text) => {
//                     let action = updateNewPostTextActionCreator(text)
//                     store.dispatch(action)
//                 }
//
//                 return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
//                                 posts={state.profilePage.postData}
//                                 newPostText={state.profilePage.newPostText}
//                 />
//             }}
//
//         </StoreContext.Consumer>
//
//     )
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }

}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: text => dispatch(updateNewPostTextActionCreator(text)),
        addPost: () => dispatch(addPostActionCreator()),
    }

}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer