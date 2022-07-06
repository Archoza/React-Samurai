import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setUsers,
    setUsersTotalCount,
    toggleFollowingInProgress,
    unfollow
} from '../../redux/users-reducer';
import {usersAPI} from "../../api/api";
import Preloader from "../common/Preloader/Preloader";
import Users from './Users';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setUsersTotalCount(data.totalUsersCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
        })

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


export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, setIsFetching, toggleFollowingInProgress
})(UsersContainer);