import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css'

const SimpleSlider = () => {
    const [SrcData, setSrcData] = useState([])
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // زمان بین اسلایدها به میلی‌ثانیه
        arrows: false // حذف دکمه‌های جلو و عقب
    };

    useEffect(() => {
        fetch('http://localhost:3000/imgsSliderSrc')
            .then(res => res.json())
            .then(data => setSrcData(data))
    }, [])

    return (
        <Slider {...settings} className='Slider'>
            {
                SrcData.map(value => (
                    <div key={value.Src} className='SliderBoxImg'>
                        <img src={value.Src} alt="" className='SliderImg' />
                    </div>
                ))
            }
        </Slider>
    );
};

export default SimpleSlider;
