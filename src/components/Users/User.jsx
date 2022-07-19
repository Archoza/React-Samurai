import React from 'react';
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";

const User = ({followingInProgress, unfollow, follow, user: {id, followed, name, status, photos}}) => {
    return (
        <div key={id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + id}>
                        <img src={photos.small != null ?
                            photos.small : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWfHTmyeHVHg_0nhMh2ZaLub7EcbFUYHuV6xGI42mw4hMPawYhyTcg96nVa4uCrp2Hblo&usqp=CAU'}
                             alt={''} className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {followed
                        ? <button disabled={followingInProgress.some(id => id === id)}
                                  onClick={() => {
                                      unfollow(id)
                                  }}>Unfollow</button>

                        : <button disabled={followingInProgress.some(id => id === id)}
                                  onClick={() => {
                                      follow(id)
                                  }}>Follow</button>}
                </div>
            </span>

            <span>
                    <div>{name}</div>
                    <div>{status}</div>
                </span>
            <span>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </span>
        </div>


    );
};

export default User;
