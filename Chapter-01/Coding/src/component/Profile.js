import React, {useState,useEffect} from "react";

const Profile = (props) =>{
    const [count] =useState(0);
    useEffect(()=>{
    console.log("use Effect");
    return ()=>{
        console.log("Use Effect Return");
    };

    },[]);
    console.log("render");
        return(
            <>
            <h1>Profile Component {props.name} </h1>
            <h2>{count}</h2>
            </>
        )
}
export default Profile;