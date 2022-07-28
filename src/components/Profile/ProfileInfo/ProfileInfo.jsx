import React from "react";
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }

    }

    return <>
        <div>
            <div>

                <div className={styles.descriptionBlock}>
                    <img src={profile.photos.large ||
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWfHTmyeHVHg_0nhMh2ZaLub7EcbFUYHuV6xGI42mw4hMPawYhyTcg96nVa4uCrp2Hblo&usqp=CAU'}
                         alt=""
                    className={styles.mainPhoto}/>
                    {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
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