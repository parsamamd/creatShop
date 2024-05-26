import React, { useEffect, useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './BoxOfproducts.css'
import { Link } from 'react-router-dom';
export default function BoxOfproducts() {
    const [laptops, setLaptops] = useState([]);

    useEffect(() => {
        // Fetch کردن داده‌ها از فایل JSON
        fetch('http://localhost:3000/Products')
            .then(response => response.json())
            .then(data => {
                // فیلتر کردن محصولاتی که نوعشان "Laptop" است
                const filteredLaptops = data.filter(product => product.type === "Laptop");
                // انتخاب ۴ تای اول از لیست لپتاپ‌ها
                const firstFourLaptops = filteredLaptops.slice(0, 8);
                // ذخیره کردن در state
                setLaptops(firstFourLaptops);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='BoxOfproducts'>
            <ul className='BoxOfproductsUl'>
                {laptops.map((laptop, index) => (
                    <li key={index} className='BoxOfproductsUlItem'>
                        <Link to={`/Cart/${laptop.name}`} ><img src={laptop.Src} alt={laptop.name} className='BoxOfproductsUlItemimg' /></Link>
                    </li>
                ))}
            </ul>
            <span className='seeMore'><ArrowBackIosIcon />مشاهده</span>
        </div>
    )
}
