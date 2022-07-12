import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field validate={[required, maxLengthCreator(16)]} type={"text"} component={Input} name={'login'} placeholder={"Login"}/></div>
            <div><Field validate={[required, maxLengthCreator(10)]} type={"text"} component={Input} name={'password'} placeholder={"Password"}/></div>
            <div><Field type={"checkbox"} name={'rememberMe'} component={Input}/> remember me</div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm