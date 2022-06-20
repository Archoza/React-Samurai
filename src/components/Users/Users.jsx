import React from 'react';
import classes from './users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, photoUrl:'https://cdn1.flamp.ru/273483ee045964372141d71e9c71e18e.jpg',followed: false, fullName: 'Dmitry', status:'Im a boss', location: {city:'Minsk', country:'Belarus'}},
            {id: 2, photoUrl:'https://cdn1.flamp.ru/273483ee045964372141d71e9c71e18e.jpg',followed: true, fullName: 'Arsen', status:'Im a boss too', location: {city:'Moscow', country:'Russia'}},
            {id: 3, photoUrl:'https://cdn1.flamp.ru/273483ee045964372141d71e9c71e18e.jpg',followed: false, fullName: 'Ivan', status:'Im a boss too', location: {city:'Kiev', country:'Ukraine'}},
        ])
    }



    let userData = props.users.map(user => (
        <div key={user.id}>
            <span>
                <div>
                    <img src={user.photoUrl} alt={''} className={classes.userPhoto}/>
                </div>
                <div>
                    {user.followed
                    ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                    : <button onClick={() => props.follow(user.id)}>Follow</button>}
                </div>
            </span>

            <span>
                    <div>{user.fullName}</div>
                    <div>{user.status}</div>
                </span>
            <span>
                    <div>{user.location.country}</div>
                    <div>{user.location.city}</div>
                </span>
        </div>
    ))
    return (
        <div>
            <div>{userData}</div>
        </div>
    )
}


export default Users




