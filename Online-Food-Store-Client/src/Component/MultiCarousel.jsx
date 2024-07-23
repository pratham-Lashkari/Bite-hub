import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-Slick';
import { topMeals } from '../constants/topMeel';
import CarouselItem from './CarouselItem';


const MultiCarousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div>
      <Slider {...settings}>
        {
          topMeals.map((item , ind)=>{
            return <CarouselItem 
            image={item.image}
            title={item.title}
            key={ind} />
          })
        }
      </Slider>
    </div>
  )
}

export default MultiCarousel