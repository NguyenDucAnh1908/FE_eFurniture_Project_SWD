import React, { useEffect, useState, useRef } from 'react'
import Slider from 'react-slick';
import $ from 'jquery'; // Import jQuery
import './HomeSlider.css';

const HomeSlider = () => {
    const sliderRef = useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500, // Tốc độ chuyển động (milliseconds)
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        easing: 'ease', // Kiểu chuyển động
        cssEase: 'ease', // Kiểu chuyển động CSS
        appendDots: dots => (
            <ul style={{ textAlign: 'center', marginTop: '20px' }}>
                {dots}
            </ul>
        ),
    };
    const goToSlide = (index) => {
        sliderRef.current.slickGoTo(index); // Sử dụng hàm slickGoTo để di chuyển đến slide theo index
    };

    return (
        <div className="home-slider-container">
            <div>
                <Slider {...settings} className="home-slider">
                    <div>
                        <img src="https://wallpapercave.com/wp/n9D8rLR.jpg" alt="Slide 1" className="home-slider-image" />
                    </div>
                    <div>
                        <img src="https://images.hdqwalls.com/download/minimal-landscape-sunrise-4k-jy-1920x1080.jpg" alt="Slide 2" className="home-slider-image" />
                    </div>
                    <div>
                        <img src="https://s1.1zoom.me/b5050/971/359586-admin_1920x1080.jpg" alt="Slide 3" className="home-slider-image" />
                    </div>
                    <div>
                        <img src="https://images7.alphacoders.com/339/339867.jpg" alt="Slide 4" className="home-slider-image" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}
export default HomeSlider;
