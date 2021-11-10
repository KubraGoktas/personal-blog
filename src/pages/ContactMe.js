import React from 'react'
import { Button, Col, Input, Row } from 'reactstrap'
import me from '../assets/images/me.jpg'

const ContactMe = () => {
    return (
        <div>
            <div class="parallax"
            >
                <div style={{ height: '500px', padding: 200 }}>
                    <Row className='contact-title'>
                    Contact Me
                    </Row>
                    <Row>
                        <Col sm='12' md='6'>
                            <Input className='input' placeholder='Name' />
                        </Col>
                        <Col sm='12' md='6'>
                            <Input className='input' placeholder='Surname' />
                        </Col>
                    </Row>
                    <Row >
                        <Col sm='12' md='12'>
                            <Input className='input' placeholder='Message' />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm='12' md='6'>
                            <Button style={{ width: 200, backgroundColor: 'rgba(255,255,255,.55)', color: 'gray' }}>Send</Button>
                        </Col>
                    </Row>
                </div>
            </div>

        </div>
    )
}

export default ContactMe
