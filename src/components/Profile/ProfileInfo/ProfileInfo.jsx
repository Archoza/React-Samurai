import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return <>
        <div>
            <div>

                <div className={classes.descriptionBlock}>
                    <img src={profile.photos.large} alt=""/>
                </div>
                <div>
                    <span>{profile.fullName}</span><br/>
                    <span>{profile.userId}</span><br/>
                    <span>{profile.aboutMe}</span><br/>
                    <span>{profile.lookingForAJobDescription}</span>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
            </div>
        </div>
    </>
}

export default ProfileInfo;