import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuth, setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends Component {
    componentDidMount() {
        setAuth()
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth,
            login: state.auth.login
        }
}


export default connect (mapStateToProps, {setAuthUserData}) (HeaderContainer)