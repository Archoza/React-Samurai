import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const changeColorLink = ({isActive}) => isActive ? classes.active : classes.item


const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink className={changeColorLink} to={'/profile'}>Profile</NavLink></div>
            <div className={`${classes.item} ${classes.activeLink}`}>
                <NavLink className={changeColorLink} to={'/dialogs'}>Messages</NavLink></div>
            <div className={classes.item}>
                <NavLink className={changeColorLink} to={'/users'}>Users</NavLink></div>
            <div className={classes.item}>
                <NavLink className={changeColorLink} to={'/news'}>News</NavLink></div>
            <div className={classes.item}>
                <NavLink className={changeColorLink} to={'/music'}>Music</NavLink></div>
            <div className={classes.item}>
                <NavLink className={changeColorLink} to={'/settings'}>Settings</NavLink></div>
        </nav>
    )
}

export default Navbar