import React from 'react'
import './BoxMoreProducts.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';

export default function BoxMoreProducts(props) {
    return (
        <div className='BoxMoreProducts'>
            <ul className='BoxMoreProductsUl'>
                {
                    props.data1.map((value, index) => (
                        <li key={index} className='BoxMoreProductsUlItem'>
                            <Link to={`/Cart/${value.name}`}><img src={value.Src} alt="" className='BoxMoreProductsUlItemIMg' /></Link>
                        </li>
                    ))
                }
                <span className='seeMore'><ArrowBackIosIcon />مشاهده</span>
            </ul>
            <ul className='BoxMoreProductsUl'>
                {
                    props.data2.map((value, index) => (
                        <li key={index} className='BoxMoreProductsUlItem'>
                            <Link to={`/Cart/${value.name}`}><img src={value.Src} alt="" className='BoxMoreProductsUlItemIMg' /></Link>

                        </li>
                    ))
                }
                <span className='seeMore'><ArrowBackIosIcon />مشاهده</span>
            </ul>
            <ul className='BoxMoreProductsUl'>
                {
                    props.data3.map((value, index) => (
                        <li key={index} className='BoxMoreProductsUlItem'>
                            <Link to={`/Cart/${value.name}`}><img src={value.Src} alt="" className='BoxMoreProductsUlItemIMg' /></Link>

                        </li>
                    ))
                }
                <span className='seeMore'><ArrowBackIosIcon />مشاهده</span>
            </ul>
            <ul className='BoxMoreProductsUl'>
                {
                    props.data4.map((value, index) => (
                        <li key={index} className='BoxMoreProductsUlItem'>
                            <Link to={`/Cart/${value.name}`}><img src={value.Src} alt="" className='BoxMoreProductsUlItemIMg' /></Link>

                        </li>
                    ))
                }
                <span className='seeMore'><ArrowBackIosIcon />مشاهده</span>
            </ul>
        </div>
    )
}
