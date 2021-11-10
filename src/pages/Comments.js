import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import me from '../assets/images/me.jpg'
import SwiperItem from '../components/SwiperItem';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import ts1 from '../assets/images/testimonial-01.png'
import ts2 from '../assets/images/testimonial-02.png'
import ts3 from '../assets/images/testimonial-03.png'
import TsCard from '../components/TsCard';
import { Col, Container, Row } from 'reactstrap';


const Comments = () => {

    const [comments, setcomments] = useState([
        {
            id: 0,
            image: ts1,
            name: 'Marta Jones',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur finibus magna suscipit sodales. Nulla rutrum, est vitae euismod tempus, velit est mattis dui, quis volutpat ligula neque lobortis quam. Donec aliquam mi eu venenatis volutpat. Praesent sollicitudin molestie dolor eu efficitur.',
            date: '11.01.2021'
        },
        {
            id: 1,
            image: ts2,
            name: 'jane Doe',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur finibus magna suscipit sodales. Nulla rutrum, est vitae euismod tempus, velit est mattis dui, quis volutpat ligula neque lobortis quam. Donec aliquam mi eu venenatis volutpat. Praesent sollicitudin molestie dolor eu efficitur.',
            date: '11.11.2021'
        },
        {
            id: 2,
            image: ts3,
            name: 'MarkBrown',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur finibus magna suscipit sodales. Nulla rutrum, est vitae euismod tempus, velit est mattis dui, quis volutpat ligula neque lobortis quam. Donec aliquam mi eu venenatis volutpat. Praesent sollicitudin molestie dolor eu efficitur.',
            date: '29.03.2021'
        },
        {
            id: 3,
            image: ts1,
            name: 'Marta Jones',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur finibus magna suscipit sodales. Nulla rutrum, est vitae euismod tempus, velit est mattis dui, quis volutpat ligula neque lobortis quam. Donec aliquam mi eu venenatis volutpat. Praesent sollicitudin molestie dolor eu efficitur.',
            date: '22.05.2021'
        }
    ])

    return (

        <div style={{ height: '100%' }} id='Comments'>
            <Container
                style={{
                    margin: 'auto',
                    left: 0, right: 0,
                }}
            >
                <Row >
                    {comments.map((item, key) => {
                        return (
                            <Col lg='6' md='12' sm='12' style={{ padding: 20 }} key={key}>
                                <TsCard comment={item} comments={comments} setcomments={setcomments} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>

    )
}

export default Comments
