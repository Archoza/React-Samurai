import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        usersAPI.getProfile(userId).then(data => {
            this.props.setUserProfile(data)
        })
    }


    render() {
        if (this.props) {
            return (
                <div>
                    <Profile {...this.props} profile={this.props.profile}/>
                </div>
            );
        }
        return <Preloader/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

const withRouter = (Component) => {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}


export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));