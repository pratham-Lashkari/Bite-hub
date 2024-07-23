import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-Slick';
import { topMeals } from '../constants/topMeel';
import CarouselItem from './CarouselItem';


const MultiCarousel = () => {
  return (
    <div>
      <Slider>
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