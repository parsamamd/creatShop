import React from 'react'
import LoginForm from '../../componnt/LoginForm/LoginForm'
import './SingUp.css'
export default function SingUp() {
    return (
        <div className='SingUp'>
            <LoginForm Email={false} Pasword={false} mtentitle="ورود" mten="اگر اکانت ندارید بسازید" mtenGo="ساختن" mtenLink="/Login" />
            <span className='crcle'></span>
        </div>
    )
}
