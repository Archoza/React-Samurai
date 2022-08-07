import React from "react";
import styles from "./ProfileInfo.module.css";


const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <>
        {isOwner && <div>
            <button onClick={goToEditMode}>Edit</button>
        </div>}
        <div><b>Full Name: </b>{profile.fullName}</div>
        <div><b>User Id: </b>{profile.userId}</div>
        <div><b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}</div>
        {profile.lookingForAJob && <div><b>Professional skills</b>: {profile.lookingForAJobDescription}</div>}
        <div><b>About me</b>: {profile.aboutMe}</div>
        <div><b>Contacts</b>{Object.keys(profile.contacts).map(key => (
            <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        ))}</div>
    </>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={styles.contact}><b>{contactTitle}</b>: {contactValue}</div>
}
export default ProfileData

