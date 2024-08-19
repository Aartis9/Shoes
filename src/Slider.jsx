import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from './assets/i1.jpg';
import slide_image_2 from './assets/i1.jpg';
import slide_image_3 from './assets/i1.jpg';
import slide_image_4 from './assets/i1.jpg';
import slide_image_5 from './assets/i1.jpg';
import slide_image_6 from './assets/i1.jpg';
import slide_image_7 from './assets/i1.jpg';

function Slider() {
  return (
    <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
         slidesPerView={1}
         spaceBetween={10}
         loop={true}
         pagination={{
           clickable: true,
         }}
         navigation={true}
         modules={[Pagination, Navigation]}
         className="swiper_container"
      
      >
         
        <SwiperSlide>
          <img className="img111" src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img111" src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img111" src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img111" src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img111" src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img111" src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img111" src={slide_image_7} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;