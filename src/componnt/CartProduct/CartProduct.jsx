import React from 'react';
import './CartProduct.css';
import { Link } from 'react-router-dom';

export default function CartProduct(props) {
    return (
        <div className='SearchPageBoxProProdact' key={props.index}>
            <Link to={`/Cart/${encodeURIComponent(props.name)}`}>
                <img src={props.Src} alt={props.name} />
                <span className='SearchPageBoxProProdactName'>{props.name}</span>
                <h3 className='SearchPageBoxProProdactv'>قیمت : {props.Price}</h3>
                <span className='SearchPageBoxProProdactStar'>
                    ستاره
                    <span className='SearchPageBoxProProdactStarcolor'>{props.star}</span>
                </span>
            </Link>
        </div>
    );
}
