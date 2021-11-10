import React from 'react'
import { Button, Col, Input, Row } from 'reactstrap'


const ContactMe = () => {
    return (
        <div id='ContactMe'>
            <div class="parallax"
            >
                <div style={{ height: '50%', width: '50%',paddingTop:'5%',paddingBottom:'5%',justifyContent:'center',marginRight:'auto',marginLeft:'auto' }}>
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
