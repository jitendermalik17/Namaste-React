import React, {useContext} from 'react'
import userContext from '../utils/UserContext'

const Footer = () => {
  const {user} = useContext(userContext);
  return (
    <>
    <div className="footer-container">
      <ul className="footer-links">
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Feedback</li>
      <li>{user.email}</li>
      </ul>
    </div>
    </>
  )
}

export default Footer