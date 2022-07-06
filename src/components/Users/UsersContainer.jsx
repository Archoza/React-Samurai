import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    getUsers,
    setCurrentPage,
    toggleFollowingInProgress, unfollow,

} from '../../redux/users-reducer';
import Preloader from "../common/Preloader/Preloader";
import Users from './Users';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                followingInProgress={this.props.followingInProgress}

                onPageChanged={this.onPageChanged}

            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,


    }
}

let withRedirect = withAuthRedirect(UsersContainer)

export default connect(mapStateToProps, {
    follow, unfollow, setCurrentPage,
    toggleFollowingInProgress,
    getUsers
})(withRedirect);