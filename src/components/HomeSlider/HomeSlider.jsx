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
                        <img src="https://wallpapercave.com/wp/wp9625932.jpg" alt="Slide 1" className="home-slider-image" />
                    </div>
                    <div>
                        <img src="https://wallpapercave.com/wp/wp9625940.jpg" alt="Slide 2" className="home-slider-image" />
                    </div>
                    <div>
                        <img src="https://wallpapercave.com/wp/wp9626011.jpg" alt="Slide 3" className="home-slider-image" />
                    </div>
                    <div>
                        <img src="https://images4.alphacoders.com/262/262096.jpg" alt="Slide 4" className="home-slider-image" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}
export default HomeSlider;
