import React, { useEffect , useState} from 'react';
import Slider from 'react-slick';
import { fetchallBrand} from '../../services/BrandApi/BrandApi';
import './BrandSlider.css';
//import {fetchallBrand} from '../services/';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const BrandSlider = () => {
    const [listBrand, setListbrand] = useState([]);

    useEffect(() => {
        getBrand();
    }, [])

    const getBrand = async () => {
        let res = await fetchallBrand();
        if (res) {
            setListbrand(res)
        }
        //console.log("Check res brand: ", res)
    };

    // Determine the number of slides to show based on the number of items in the listBrand array
    const slidesToShow = listBrand.length > 5 ? 5 : listBrand.length;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true, // Autoplay enabled
        autoplaySpeed: 2000, // Autoplay speed set to 3 seconds
        prevArrow: <div className="b-prev"><i className="fas fa-angle-left"></i></div>,
        nextArrow: <div className="b-next"><i className="fas fa-angle-right"></i></div>,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="u-s-p-b-60">
            <div className="section__content">
                <div className="container">
                    <Slider {...settings}>
                        {listBrand && listBrand.map((brandItem, index) => (
                            <div className="brand-slide" key={index}>
                                <a href="shop-side-version-2.html">
                                    <img src={brandItem.logo} alt="" />
                                </a>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default BrandSlider;
                        {/* <div className="brand-slide">
                            <a href="shop-side-version-2.html">
                                <img src="images/brand/b2.png" alt="" />
                            </a>
                        </div>
                        <div className="brand-slide">
                            <a href="shop-side-version-2.html">
                                <img src="images/brand/b3.png" alt="" />
                            </a>
                        </div>
                        <div className="brand-slide">
                            <a href="shop-side-version-2.html">
                                <img src="images/brand/b4.png" alt="" />
                            </a>
                        </div>
                        <div className="brand-slide">
                            <a href="shop-side-version-2.html">
                                <img src="images/brand/b5.png" alt="" />
                            </a>
                        </div>
                        <div className="brand-slide">
                            <a href="shop-side-version-2.html">
                                <img src="images/brand/b6.png" alt="" />
                            </a>
                        </div> */}