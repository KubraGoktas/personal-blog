import React from 'react'
import { Col, Row } from 'reactstrap'

const SwiperItem = () => {
    return (
        <div style={{ width: '100%', height: '100%', textAlign: 'center', justifyContent: 'center', padding: 50 }}>
            <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
                <Row>
                    <span className='about-title'>who am i ?</span>
                </Row>
                <Row>
                    <Col className='about-text'>
                        Hello, my name is Kübra Göktaş. I am a computer engineer. I am from the Sivas and I currently live in Sivas. I have been a front end developer for 7 mounth, and work in react and react-naive preparation. Before becoming a frontend developer, I worked as a backend developer with ASP .NET CORE. In my free time, I enjoy hiking, reading book, and coding.
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default SwiperItem
