import React, { useState } from 'react'
import { Row } from 'reactstrap'
import { Swiper, SwiperSlide } from 'swiper/react';

import me from '../assets/images/me.jpg'
import SwiperItem from '../components/SwiperItem';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
const AboutMe = () => {
    const [height, setheight] = useState(window.innerHeight)
    return (
        <div style={{height:'50%'}} id='AboutMe'>
            <Row>
                <div className='image-container'>
                    <img src={me} alt='kg' className='image' />
                </div>
            </Row>

            <div className='about-container' >
                <div style={{ marginTop:100,height:'100%'}}>

                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={true}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}

                    >
                        <SwiperSlide>
                            <SwiperItem />

                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperItem />

                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>

        </div>
    )
}

export default AboutMe
