import React from 'react';
import './Imgslider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Imgslider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

    return (
        <Slider className = 'slider' {...settings}>
            <div className = 'wrap'>
                <img src = '/images/slider-badging.jpg'/>
            </div>
            <div className = 'wrap'>
                <img src = '/images/slider-badag.jpg'/>
            </div>
        </Slider>
    )
}

export default Imgslider
