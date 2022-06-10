import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    console.log(props)
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.state.postData}
                     newPostText={props.state.newPostText}
                     dispatch={props.dispatch}
            />

        </div>
    )
}

export default Profile