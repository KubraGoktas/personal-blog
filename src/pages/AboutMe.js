import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Swiper, SwiperSlide } from 'swiper';

import me from '../assets/images/me.jpg'
import SwiperItem from '../components/SwiperItem';
import SwiperCore, {
    Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);


const AboutMe = () => {
    const [height, setheight] = useState(window.innerHeight)
    return (
        <div style={{ height: '50%',backgroundColor:'rgba(33,37,41,255)',top:0 }} id='AboutMe'>
            <Container>
                <Row>
                    <Col md='6'>
                        <div className='image-container row'>
                            <Col lg='6' md='6' sm='12' >
                                <img src={me} alt='kg' className='image' />
                            </Col>
                            <Col lg='6' md='6' sm='12' >
                                <div className='name'>
                                    Kübra Göktaş
                                </div>
                                <div className='job'>
                                    Computer Engineer
                                </div>
                            </Col>
                        </div>
                    </Col>
                    <Col md='6'>
                        {/* <div className='about-container' > */}
                        <div style={{ width: '100%' }}>

                            <Swiper
                                navigation={true}
                                style={
                                    {
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textAlignLast: 'center'

                                    }
                                }
                            // autoplay={true}
                            >
                                <SwiperSlide>
                                    <SwiperItem />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <SwiperItem />

                                </SwiperSlide>
                            </Swiper>
                        </div>

                        {/* </div> */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutMe
