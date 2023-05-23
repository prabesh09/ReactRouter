import React from 'react'
import '../styles/Account.css'
import { NavLink } from 'react-router-dom'

const Account = () => {
    return (
        <div className='account-container'>
            <h1>Username</h1>
            <input type="text" />

            <h1>Password</h1>
            <input type="password" />

            <br />
            <button className='login-btn'>Log In</button>
            <div className='user-help'>
                <NavLink className="create-account" to={"/account/signup"}>Create a new Account</NavLink>
                <NavLink className="forget-pw-btn" to={"/account/reset"}>Forget password?</NavLink>
            </div>
        </div>
    )
}

export default Account