import React from 'react';
import './Bestseller.css';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

export default function Bestseller(props) {
    return (
        <div className='Bestseller'>
            <div className='BestsellerItem'>
                <div className='BestsellerItemitem'>
                    {props.dataMobail.map((value, index) => (
                        <div className='mobailBestseller' key={index} dir='rtl'>
                            <Link to={`/Cart/${value.name}`}>
                                <img src={value.Src} alt="" className='mobailBestsellerImg' />
                                <span className='Bestsellername'>{value.name}</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
