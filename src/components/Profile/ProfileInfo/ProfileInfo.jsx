import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return <>
        <div>
            <div>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                    alt=""/>
                <div className={classes.descriptionBlock}>
                    <img src={props.profile.photos.large} alt=""/>
                </div>
                <div>
                    <span>{props.profile.fullName}</span><br/>
                    <span>{props.profile.aboutMe}</span><br/>
                    <span>{props.profile.lookingForAJobDescription}</span>
                </div>
            </div>
        </div>
    </>
}

export default ProfileInfo;