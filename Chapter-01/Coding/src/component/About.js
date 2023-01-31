import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Profile from './Profile';
import { ProfileClass } from './ProfileClass';
import UserContext from '../utils/UserContext';

class About extends Component{
  constructor(props){
    super(props);
    console.log("Parent - constructor");
  }

  componentDidMount(){
    console.log("Parent componentDidMount"); 
  }
  render(){
    console.log("Parent Render"); //
    return(
      <>
      <div className="restaurant-list-container about">
        <h1>About Us Page</h1>
        <UserContext.Consumer>
        { ({user}) => <h4 className="font-bold text-xl">{user.name} & {user.email}</h4>}
        </UserContext.Consumer>
        <p>This is Jitender's Learning path to reach his Goal by learning Namastey React from PRO (Akshay)</p>
        <Profile name="Akshay Class" />
      </div>
      </>
    )
  }
}
export default About;