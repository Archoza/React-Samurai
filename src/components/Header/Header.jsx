import React from "react";
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324"
                alt=""/>
            <div className={styles.loginBlock}>
                {props.isAuth
                    ? <div>
                        <div>{props.login}</div>
                        <div><button onClick={props.logout}>Logout</button></div>
                </div>
                    : <NavLink to={'/Login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header