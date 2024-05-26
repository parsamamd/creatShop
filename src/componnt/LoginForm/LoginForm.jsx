import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './LoginForm.css'

export default function LoginForm(props) {
    const [UserName, setUserName] = useState('');
    const [UserEmail, setUserEmail] = useState('');
    const [UserPasword, setUserPasword] = useState('');
    
    const handClick = () => {
        const NewUser = {
            UserName,
            UserEmail,
            UserPasword
        }

        fetch('http://localhost:3000/Users', {
            method: "POST",
            body: JSON.stringify(NewUser)
        })
    }
    return (
        <div className='LoginForm'>
            <p className='LoginFormTitle'>{props.mtentitle}</p>
            <div className="LoginInput">
                <form>
                    <TextField id="outlined-basic" label="Name" variant="outlined" autoFocus={true} onChange={(event) => setUserName(event.target.value)} />
                    {
                        props.Email &&
                        <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(event) => setUserEmail(event.target.value)} />
                    }
                    <TextField id="outlined-basic" label="Pasword" variant="outlined" type="password" onChange={(event) => setUserPasword(event.target.value)} />
                    {
                        props.Pasword &&
                        <TextField id="outlined-basic" label="Pasword" variant="outlined" type="password" />

                    }
                    <Button variant="contained" onClick={handClick}>Contained</Button>
                </form>
            </div>
            <div className="LoginGoSingup">
                <span>{props.mten}</span>
                <Link to={props.mtenLink}>{props.mtenGo}</Link>
            </div>
        </div>
    )
}
