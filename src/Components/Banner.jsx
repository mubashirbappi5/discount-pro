import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
const Banner = () => {
  const [loading,setloading] = useState(true)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setloading(false); 
    }, 1000); 

    return () => clearTimeout(timeout);
  }, []);
    return (
        <div className='px-10'>

           {
            loading? <div>
              <div className="flex w-full flex-col gap-4">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>

            </div>: <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='rounded-md' src="https://i.ibb.co.com/BBRHg7h/Green-Modern-Headphone-Promotion-Banner.png" alt="" /></SwiperSlide>
        <SwiperSlide  ><img className='rounded-md' src="https://i.ibb.co.com/hyqcS7H/Brown-and-White-Simple-Coffee-Banner.png" alt="" /></SwiperSlide>
        <SwiperSlide  ><img className='rounded-md' src="https://i.ibb.co.com/2t0QjRx/Yellow-Bold-End-of-Season-Sale-Banner.jpg" alt="" /></SwiperSlide>
        <SwiperSlide  ><img className='rounded-md' src="https://i.ibb.co.com/nCNsXqZ/Purple-Orange-Organic-Memphis-Flash-Sale-Banner-Design.png" alt="" /></SwiperSlide>
        <SwiperSlide >
            <img  className='rounded-md' src="https://i.ibb.co.com/WsyLsHz/Red-White-Yellow-Modern-Minimalist-Shoes-New-Arrival-Promotion-Banner-Landscape.png" alt="" />
        </SwiperSlide>
        
      </Swiper>
           }
        </div>
    );
};

export default Banner;