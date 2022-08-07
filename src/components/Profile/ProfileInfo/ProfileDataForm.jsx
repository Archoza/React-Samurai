import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import styles from './ProfileInfo.module.css'

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>

            <b>Full Name</b>:
            <Field component={Input}
                   name={'fullName'}
                   placeholder={'Edit Full Name'}
                   validate={[required, maxLengthCreator(20)]}
            />

        </div>
        <div>
            <b>Looking for a job</b>:
            <Field component={Input}
                   type={'checkbox'}
                   name={'lookingForAJob'}
                   placeholder={'Edit Looking for a job'}
            />
        </div>
        <div>
            <b>Professional skills</b>:
            <Field component={Textarea}
                   name={'lookingForAJobDescription'}
                   placeholder={'Edit Professional skills'}
                   validate={[required, maxLengthCreator(100)]}
            />
        </div>
        <div>
            <b>About me</b>:

            <Field component={Textarea}
                   name={'aboutMe'}
                   placeholder={'Edit About me'}
                   validate={[required, maxLengthCreator(100)]}
            />
        </div>

        <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => (
            <div key={key} className={styles.contact}>
                <b>{key}</b>:
                <Field component={Textarea}
                       name={'contacts.'+ key}
                       placeholder={'enter social address'}
                       validate={[required, maxLengthCreator(100)]}
                />
            </div>

        ))}</div>
        <div>
            <button>Send</button>
        </div>
        {error && <div className={styles.formSummaryError}>{error}</div>}

    </form>

}
const ProfileDataFormRedux = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormRedux

