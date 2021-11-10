import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import foto1 from '../assets/images/indir.jpg'
import me from '../assets/images/me.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Swiper, SwiperSlide } from 'swiper';
import SwiperCore, {
    Navigation,
    Pagination,
    Mousewheel
} from 'swiper';
import SwiperItemWithImage from '../components/SwiperItemWithImage';
// install Swiper modules
SwiperCore.use([Navigation]);
SwiperCore.use([Mousewheel,Pagination]);
const MyWork = () => {
    const [opacity, setopacity] = useState(1)
    const [ScrollPosition, setScrollPosition] = useState()
    const position = window.pageYOffset;
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (ScrollPosition > 520) {
            setopacity(opacity - 0.01)
        }
    }, [ScrollPosition])

    console.log(ScrollPosition, opacity)

    return (
        <div id='MyWork'>
            <Container style={{height:500,position:'relative'}}>
                {/* <Row
                    style={{
                        textAlignLast: 'center'
                    }}
                >
                    <Col>
                        burası1
                    </Col>
                    <Col>
                        burası2
                    </Col>
                </Row> */}
                <Swiper
                    direction={'vertical'}
                    pagination={true}
                    mousewheel={true}
                    style={{width:'100%',height:'100%'}}
                >
                    <SwiperSlide>
                        <SwiperItemWithImage/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <SwiperItemWithImage/>
                    </SwiperSlide>
                </Swiper>
            </Container>
            {/* <img src={foto1} width='50%' style={{ position: 'absolute' }} />
            <img src={me} width='50%' style={{ position: 'relative', opacity: opacity }} /> */}

        </div>
    )
}

export default MyWork
