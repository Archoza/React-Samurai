import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import styles from './../common/FormControls/FormControls.module.css'


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><Field
                validate={[required, maxLengthCreator(30)]} type={"text"}
                component={Input} name={'email'} placeholder={"Email"}/></div>
            <div><Field
                validate={[required, maxLengthCreator(16)]} type={"text"}
                component={Input} name={'password'} placeholder={"Password"}/></div>
            <div><Field type={"checkbox"} name={'rememberMe'} component={Input}/> remember me</div>
            <div>
                <button>Submit</button>
            </div>
            {captchaUrl &&
            <div><img alt={''} src={captchaUrl}/>
                <Field name={'captcha'}
                       placeholder={'symbols from image'}
                       component={Input}
                       validate={[required, maxLengthCreator(10)]}/></div>}
            {error && <div className={styles.formSummaryError}>{error}</div>}
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm