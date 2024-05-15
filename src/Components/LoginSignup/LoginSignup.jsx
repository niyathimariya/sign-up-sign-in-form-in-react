import React from 'react'
import './LoginSignup.css'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import person_icon from '../Assets/person.png'

const LoginSignup = () => {
  return (
    <div claasName='container'>
        <div className="header">
            <div className="text">SignUp</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={person_icon}alt=""/>
                <input type="text"/>
            </div>
            <div className="input">
                <img src={email_icon}alt=""/>
                <input type="email"/>
            </div>
            <div className="input">
                <img src={password_icon}alt=""/>
                <input type="password"/>
            </div>
        </div>
      
      <div className="forgot-password">Lost password<span>Click Here</span></div>
        <div className="submit-container">
            <div className="submit">SignUp</div>
            <div className="submit">LogIn</div>
        </div>
    </div>
  )
}

export default LoginSignup
