import React from 'react';
import './hero.css';
import heroSlider1 from "../../assets/images/slider1.webp";
import heroSlider2 from "../../assets/images/slider2.webp";
import heroSlider3 from "../../assets/images/slider3.webp";
import heroSlider4 from "../../assets/images/slider4.webp";
import heroSlider5 from "../../assets/images/slider5.webp";
import heroSlider6 from "../../assets/images/slider6.webp";
import heroSlider7 from "../../assets/images/slider7.webp";
import heroSlider8 from "../../assets/images/slider8.webp";
import heroSlider9 from "../../assets/images/slider9.webp";

import ImageSlider from 'react-simple-image-slider';

const images = [
    { url: heroSlider8 },
    { url: heroSlider2 },
    { url: heroSlider3 },
    { url: heroSlider4 },
    { url: heroSlider5 },
    { url: heroSlider6 },
    { url: heroSlider7 },
    { url: heroSlider1 },
    { url: heroSlider9 }
]

const clientHeight = window.innerHeight;

const Hero = () => {
    return (
        <section className="absolute -z-10 top-0 w-full left-0  mx-auto">
            <div className="mx-auto text-center">
                <ImageSlider width='100%' height={clientHeight} autoPlay='true' loop='true' images={images} autoPlayDelay='1' slideDuration='0.3' showBullets={true} showNavs={true} />
            </div>
        </section>
    )
}

export default Hero;