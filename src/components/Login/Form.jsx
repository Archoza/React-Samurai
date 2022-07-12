import React from 'react'
import {Field, reduxForm} from 'redux-form'


const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field type={"text"} component={'input'} name={'login'} placeholder={"Login"}/></div>
            <div><Field type={"text"} component={'input'} name={'password'} placeholder={"Password"}/></div>
            <div><Field type={"checkbox"} name={'rememberMe'} component={'input'}/> remember me</div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm