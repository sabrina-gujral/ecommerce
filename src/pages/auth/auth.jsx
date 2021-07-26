import React from 'react'
import './auth.scss'
import SignIn from '../../components/signin/signin'
import SignUp from "../../components/signup/signup";


const Auth = () => {
    return (
    <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
    </div>
    )
}

export default Auth