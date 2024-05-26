import React from 'react'
import Button from '@mui/material/Button';
import './reminderLogin.css'
import { Link } from 'react-router-dom';
export default function ReminderLogin() {
    return (
        <div className='reminderLogin'>
            <h1>برای خرید کردن عضو بشید</h1>
            <Link to='/Login' ><Button variant="contained">عضو شدن</Button></Link>
        </div>
    )
}
