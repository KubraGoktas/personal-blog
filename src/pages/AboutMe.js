import React, { useState } from 'react'
import { Row } from 'reactstrap'
import me from '../assets/images/me.jpg'

const AboutMe = () => {
    const [height, setheight] = useState(window.innerHeight)
    return (
        <div>
            <Row>
                <div className='image-container'>
                    <img src={me} alt='kg' className='image' />
                </div>
            </Row>

            <div className='about-container'>

            </div>

        </div>
    )
}

export default AboutMe
