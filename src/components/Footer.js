import React from 'react'
import { Col, Row } from 'reactstrap'
import { AiOutlineLinkedin, AiOutlineTwitter, AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
const Footer = () => {
    return (
        <div style={{
            bottom: 0, width: '100%',
            height: '60px',
            // backgroundColor: '#B55400',
            textAlign: 'center',
            padding: 20
        }}>

            <AiOutlineLinkedin size={30} style={{ marginRight: 10 }} onClick={()=>window.location.href='https://www.linkedin.com/in/k%C3%BCbra-g%C3%B6kta%C5%9F-525731209/'} />
            <AiOutlineInstagram size={30} style={{ marginRight: 10 }}  onClick={()=>window.location.href='https://www.instagram.com/kbra.gg/'} />
            <AiOutlineGithub size={30} style={{ marginRight: 10 }}  onClick={()=>window.location.href='https://github.com/KubraGoktas'} />
            {/* <AiOutlineTwitter size={30} style={{ marginRight: 10 }}  onClick={()=>window.location.href='https://www.linkedin.com/in/k%C3%BCbra-g%C3%B6kta%C5%9F-525731209/'} /> */}

        </div>
    )
}

export default Footer
