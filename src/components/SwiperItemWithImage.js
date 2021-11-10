import React from 'react'
import { Col, Row } from 'reactstrap'
import img1 from '../assets/images/sw1.png'

const SwiperItemWithImage = ({title,text,img}) => {
    return (
        <div style={{ padding: 10,backgroundColor:'rgba(33,37,41,255)' }}>
            <Row style={{padding: 50 }}>
                <Col>
                    <Row style={{textAlignLast: 'center',}}>
                        <span className='about-title'>{title}</span>
                    </Row>
                    <Row>
                        <div className='about-text' style={{ textAlignLast: 'center'}}>
                            {text}
                        </div>
                    </Row>
                </Col>
                <Col>
                    <img src={img} />
                </Col>
            </Row>
        </div>
    )
}

export default SwiperItemWithImage
