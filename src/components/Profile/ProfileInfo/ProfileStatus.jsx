import React from "react";
import styles from './ProfileStatus.module.css'
import dialogsReducer from "../../../redux/dialogs-reducer";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true

        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    render() {
        return <>
            <div>
                {!this.state.editMode
                    ?
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "no status"}</span>
                    </div>
                    :
                    <div>
                        <input onChange={this.onStatusChange}
                               autoFocus={true}
                               onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        </>
    }
}

export default ProfileStatus;