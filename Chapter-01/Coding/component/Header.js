import React, { useState } from "react";
import logo from '../assets/logo.png'
import '../styles/header.css'
import { Link } from "react-router-dom";


const loggedInUser = () =>{
    return false
}
const Header = () => {
    const [active, setActive] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(true);
const navObj = [{
    id:1,
    navName:"Home",
    url : "/",
    },
    {
    id:2,
    navName:"About",
    url : "/about",
    },
    {
    id:3,
    navName:"Contact",
    url:"/contact",
    },
    {
    id:4,
    navName:"Cart",
    url:"/",
    }   
];
    return (
        <div className="header-container">
            <img src={logo} alt="logo" height={120} width={120} className="logo"/>
            <ul className='nav-items'>
            {navObj.map(curNav => <li><Link className={active === curNav.id ? "active" : "a"} to={curNav.url} onClick={()=> setActive(curNav.id)}>{curNav.navName}</Link></li>)}
            <li><button className={isLoggedIn ? "log__out" : "log__in"} onClick={()=> setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Log Out" : "Log In"}</button></li>
            </ul>
        
        </div>
    );
}

export default Header