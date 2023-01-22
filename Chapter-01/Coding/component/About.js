import React,{ Component } from 'react';
import { Outlet } from 'react-router-dom';
import ProfileFunctionalComponent from './Profile';
import {Profile} from './ProfileClass';

const About2 = () => {
  return (
    <>
    <div className="restaurant-list-container about">
      <h1>About Us Page</h1>
      <p>This is Jitender's Learning path to reach his Goal by learning Namastey React from PRO (Akshay)</p>
      <Profile name="First Child" />
    </div>
    </>
  )
}

class About extends Component{
  constructor(props){
    super(props);
   // console.log(Parent - constructor)  //1
  }

  componentDidMount(){
    //best place to make an API call
    //console.log("Parent componentDidMount"); //3
  }
  render(){
    //console.log("Parent Render"); //2
    return(
      <>
      <div className="restaurant-list-container about">
        <h1>About Us Page</h1>
        <p>This is Jitender's Learning path to reach his Goal by learning Namastey React from PRO (Akshay)</p>
        <Profile name="Akshay Class" />
      </div>
      </>
    )
  }
}
export default About;