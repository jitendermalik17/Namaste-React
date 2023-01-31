import React, { useState, useContext } from "react";
import logo from '../assets/logo.png'
import '../../styles/header.css';
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [active, setActive] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const {user} = useContext(UserContext);
//custom Hook
//const [getLocalVariables, setLocalVariables]= useLocaltStorage();

const isOnline = useOnline();

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
    } ,
    {
    id:5,
    navName:"Insta Mart",
    url:"instamart",
    }   
];

    return (
        <div className="header-container bg-orange-100 shadow-lg">
            <img src={logo} alt="logo" height={120} width={120} className="logo"/>
            <h1 className="p-2">{isOnline ? "🤩": "😥" }</h1>
           <span className="font-bold text-green-700">{user.name}</span>
            <ul className='nav-items'>
            {navObj.map(curNav => <li key={curNav.id}><Link className={active === curNav.id ? "active" : "a"} to={curNav.url} onClick={()=> setActive(curNav.id)}>{curNav.navName}</Link></li>)}
            <li><button className={isLoggedIn ? "log__out" : "log__in"} onClick={()=> setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Log Out" : "Log In"}</button></li>
            </ul>
        
        </div>
    );
}

export default Header