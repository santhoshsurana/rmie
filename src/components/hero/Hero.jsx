import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

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

const Hero = () => {
    return (
        <section className="md:-mt-28 mt-24 text-teal-900">
            <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className='mySwiper md:h-screen'
      >
                <SwiperSlide>
                    <div className="absolute top-60 left-20 p-4 bg-black opacity-80">
                        <h2 className="px-4 py-1 opacity-100 font-bold md:text-md text-3xl text-white drop-shadow-xl">Where Dimensions Take Shape.</h2>
                        <p className="px-4 hidden md:block font-medium opacity-100 md:w-[800px] md:text-md text-md text-white drop-shadow-xl">We are a team of creative and passionate interior designers with a wealth of experience in the industry. Our goal is to transform mundane spaces into functional and aesthetically pleasing environments that reflect the personalities and lifestyles of our clients.</p>
                    </div>
                    <img className="object-contain w-full" src={heroSlider8} alt="" /> </SwiperSlide>
                <SwiperSlide><img className="object-contain w-full" src={heroSlider2} alt="" /></SwiperSlide>
                <SwiperSlide><img className="object-contain w-full" src={heroSlider3} alt="" /></SwiperSlide>
                <SwiperSlide><img className="object-contain w-full" src={heroSlider4} alt="" /></SwiperSlide>
                <SwiperSlide><img className="object-contain w-full" src={heroSlider5} alt="" /></SwiperSlide>
                <SwiperSlide><img className="object-contain w-full" src={heroSlider6} alt="" /></SwiperSlide>
                <SwiperSlide><img className="object-contain w-full" src={heroSlider7} alt="" /></SwiperSlide>
                <SwiperSlide><img className="object-contain w-full" src={heroSlider1} alt="" /></SwiperSlide>
                <SwiperSlide><img className="object-contain w-full" src={heroSlider9} alt="" /></SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Hero;
