import React from 'react'
import { Button, Col, Input, Row } from 'reactstrap'
import me from '../assets/images/me.jpg'

const ContactMe = () => {
    return (
        <div id='ContactMe'>
            <div class="parallax"
            >
                <div style={{ height: '100%', paddingRight: '20%', paddingLeft: '20%' }}>
                    <Row className='contact-title'>
                        Contact Me
                    </Row>
                    <Row >
                        <Col sm='12' md='6' className='mb-4'>
                            <Input className='input' placeholder='Name' />
                        </Col>
                        <Col sm='12' md='6' className='mb-4'>
                            <Input className='input' placeholder='Surname' />
                        </Col>
                    </Row>
                    <Row >
                        <Col sm='12' md='12'>
                            <Input className='input' placeholder='Message'  type="textarea"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm='12' md='6'>
                            <Button className='mt-4 mb-4 form-button'>Send</Button>
                        </Col>
                    </Row>
                </div>
            </div>

        </div>
    )
}

export default ContactMe
