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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
        <section className="pb-12 top-0 left-0  mx-auto">
            <div className="mx-auto text-center">
                <ImageSlider width='100%' height={clientHeight} autoPlay='true' loop='true' images={images} slideDuration='0.9' showBullets={true} showNavs={true} />
            </div>
            <div className="max-w-6xl mx-auto text-center my-24 md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-6 text-2xl font-extrabold leading-none tracking-normal text-teal-900 md:text-4xl md:tracking-tight primary_text editable"
                    data-content="website-headlines">Our Vision</h1>
                <p className="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24  editable" data-content="website-subheadlines">
                    To be the premier interior design company that consistently delivers exceptional design solutions that exceed our clients' expectations.</p>
                    <h1 className="mb-6 text-2xl font-extrabold leading-none tracking-normal text-teal-900 md:text-4xl md:tracking-tight primary_text editable"
                    data-content="website-headlines">Our Mission</h1>
                <p className="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24  editable" data-content="website-subheadlines">
                    To provide a full range of interior design services that enhance the functionality, aesthetics, and value of our clients' spaces. We strive to create meaningful and enduring designs that reflect our clients' personalities and lifestyles, and to deliver these services with the highest level of professionalism, creativity, and customer satisfaction. We are committed to being a trusted partner for our clients and to contributing to the betterment of the communities in which we work.</p>
                <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                    <a className="inline-flex items-center transition easy-in-out delay-150 hover:translate-1 hover:scale-110 duration-300 justify-center w-full border-none bg-teal-800 hover:bg-teal-900 h-12 px-6 text-white text-md font-medium rounded-lg sm:w-auto sm:mb-0 accent_text btn-editable editable"
                        href="/contact">
                        Get Started
                        <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                    </a>
                </div>
            </div>

        </section>

    )
}

export default Hero;