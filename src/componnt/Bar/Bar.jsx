import React, { useState } from 'react'
import './Bar.css'
export default function Bar() {
    const [srcBar, setsrcBar] = useState([])

    fetch('http://localhost:3000/SrcBar')
        .then(res => res.json())
        .then(data => setsrcBar(data))


    return (
        <div className='Bar'>
            {
                srcBar.map((value, index) => (
                    <div className='barimgbox'  key={index}>
                        <img src={value.Src} alt="" className='barimg' />
                        <p>{value.name}</p>
                    </div>
                ))
            }
        </div>
    )
}
