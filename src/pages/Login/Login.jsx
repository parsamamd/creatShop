import React from 'react'

import './Login.css'
import LoginForm from '../../componnt/LoginForm/LoginForm'
export default function Login() {
    return (
        <div className='Login'>
            <LoginForm Email={true} Pasword={true} mtentitle="ساختن اکانت" mten="اگه از قبلا اکانت دارید کلیک کنید" mtenGo="ورود" mtenLink="/SingUp" />
            <span className='circleToTopred'></span>
            <span className='circleToTopblue'></span>
            <span className='circleToTopgreen'></span>
        </div>
    )
}
