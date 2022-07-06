import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        this.props.getUserProfile(userId)
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
    profile: state.profilePage.profile,
})


let AuthRedirectComponent = withAuthRedirect(ProfileContainer)


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


export default connect(mapStateToProps, {getUserProfile})(withRouter(AuthRedirectComponent));