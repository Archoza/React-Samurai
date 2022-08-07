import React, {useState} from "react";
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import ProfileData from "./ProfileData";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    let onSubmit = (formData) => {
        saveProfile(formData).then(()=> {
            setEditMode(false)
        })

        console.log(formData)
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
                {editMode ?
                    <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> :

                    <ProfileData profile={profile}
                                 isOwner={isOwner}
                                 goToEditMode={() => {setEditMode(true)}}/>}
            </div>
            <div><ProfileStatusWithHooks status={status} updateStatus={updateStatus}/></div>
        </div>
    </>
}


// const ProfileData = ({profile, isOwner, goToEditMode}) => {
//     return <>
//         {isOwner && <div>
//             <button onClick={goToEditMode}>Edit</button>
//         </div>}
//         <div><b>Full Name: </b>{profile.fullName}</div>
//         <div><b>User Id: </b>{profile.userId}</div>
//         <div><b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}</div>
//         {profile.lookingForAJob && <div><b>Professional skills</b>: {profile.lookingForAJobDescription}</div>}
//         <div><b>About me</b>: {profile.aboutMe}</div>
//         <div><b>Contacts</b>{Object.keys(profile.contacts).map(key => (
//             <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
//         ))}</div>
//     </>
// }




export default ProfileInfo;