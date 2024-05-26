import React, { useState } from 'react'
import './Advertising1.css'
export default function Advertising1() {
    const [Advertisings, setAdvertising] = useState([])

    fetch('http://localhost:3000/Advertising1')
        .then(res => res.json())
        .then(data => setAdvertising(data))

    return (
        <div className='Advertising1'>
            {
                Advertisings.map((value, index) => (
                    <div className='AdvertisingItem' key={index}>
                        <img src={value.Src} alt="" className='AdvertisingItemImg'/>
                    </div>
                ))
            }
        </div>
    )
}
