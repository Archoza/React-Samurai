import React from 'react';
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i=1; i <= 10; i++) { //pagesCount
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map((p, index) => {
                    return (
                        <span
                            className={(props.currentPage === p) ? styles.selectedPage : undefined}
                            key={index}
                            onClick={() => {props.onPageChanged(p)}}
                        >{p}</span>)
                })}

            </div>
            {props.users.map(user => (
                <div key={user.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ?
                            user.photos.small : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWfHTmyeHVHg_0nhMh2ZaLub7EcbFUYHuV6xGI42mw4hMPawYhyTcg96nVa4uCrp2Hblo&usqp=CAU'}
                             alt={''} className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={props.followingInProgress.some(id=>id===user.id)} onClick={() => {
                            props.toggleFollowingInProgress(true, user.id)
                            debugger
                            usersAPI.deleteFollow(user.id).then(resultCode => {
                                if (resultCode === 0) {
                                    props.unfollow(user.id)
                                }
                                props.toggleFollowingInProgress(false, user.id)
                            })
                        }}>Unfollow</button>

                        : <button disabled={props.followingInProgress.some(id=>id===user.id)} onClick={() => {
                            props.toggleFollowingInProgress(true, user.id)
                            usersAPI.addFollow(user.id).then(resultCode => {
                                if (resultCode === 0) {
                                    props.follow(user.id)
                                }
                                props.toggleFollowingInProgress(false, user.id)
                            })
                        }}>Follow</button>}
                </div>
            </span>

                    <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                    <span>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </span>
                </div>
            ))}
        </div>

    );
};

export default Users;
