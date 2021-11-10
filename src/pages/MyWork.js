import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Swiper, SwiperSlide } from 'swiper';
import SwiperCore, {
    Navigation,
    Pagination,
    Mousewheel,
    EffectFade
} from 'swiper';
import SwiperItemWithImage from '../components/SwiperItemWithImage';

import img1 from '../assets/images/sw1.webp'
import img2 from '../assets/images/sw2.webp'
import img3 from '../assets/images/sw3.webp'


// install Swiper modules
SwiperCore.use([Mousewheel, Pagination,Navigation,EffectFade]);

const MyWork = () => {
    const height=window.innerHeight;
    const WorkList = [
        {
            title: 'React',
            text: 'I have been developing frontend for about 6-7 months in the institution where I have been doing my internship for 10 months. I have more than 10 works made with React js and react native.',
            img: img1
        },
        {
            title: 'React Native',
            text: 'I have been working with react native for 4-5 months. I have developed a few projects and uploaded them to the market. Working with react native in Front always gives me more pleasure.',
            img: img2
        },
        {
            title: 'Asp .NET',
            text: 'You can take a look at the projects I made with .net core on github. Before my frontend adventure, I did backend developments and I have basic docker knowledge.',
            img: img3
        }
    ]


    return (
        <div id='MyWork' style={{backgroundColor:'rgba(33,37,41,255)'}}>
            <Container style={{ height: height/1.5, position: 'relative' }}>
                <Swiper
                    direction={'vertical'}
                    pagination={true}
                    mousewheel={true}
                    effect={'fade'}
                    style={{ width: '100%', height: '100%' }}
                >
                    {WorkList.map((item, key) => {
                        return (
                            <SwiperSlide>
                                <SwiperItemWithImage title={item.title} text={item.text} img={item.img} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Container>

        </div>
    )
}

export default MyWork
