import React, {useEffect, useState} from "react";
import styles from './ProfileStatus.module.css'

const ProfileStatusWithHooks = props => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateMode = () => {
        setEditMode(true)
    }
    const deactivateMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => setStatus(e.currentTarget.value)

    return <>
        <div>
            {!editMode
                ?
                <div>
                    <b>Status :</b><span onDoubleClick={activateMode} >{props.status || "no status"} yo!</span>
                </div>
                :
                <div>
                    <input autoFocus={true}
                           value={status}
                           onChange={onStatusChange}
                           onBlur={deactivateMode}/>
                </div>
            }
        </div>
    </>
}


export default ProfileStatusWithHooks;