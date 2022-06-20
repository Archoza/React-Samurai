import React from 'react';
import classes from './users.module.css'
import axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => this.props.setUsers(response.data.items))
    }


    render() {
        return <div>
            {this.props.users.map(user => (
                <div key={user.id}>
            <span>
                <div>
                    <img src={user.photos.small != null ?
                        user.photos.small : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWfHTmyeHVHg_0nhMh2ZaLub7EcbFUYHuV6xGI42mw4hMPawYhyTcg96nVa4uCrp2Hblo&usqp=CAU'}
                         alt={''} className={classes.userPhoto}/>
                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
                        : <button onClick={() => this.props.follow(user.id)}>Follow</button>}
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

    }


}


export default Users




