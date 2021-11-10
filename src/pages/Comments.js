import React, { useState } from 'react'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import ts1 from '../assets/images/testimonial-01.png'
import ts2 from '../assets/images/testimonial-02.png'
import ts3 from '../assets/images/testimonial-03.png'
import TsCard from '../components/TsCard';
import { Button, Card, CardBody, Col, Collapse, Container, Input, Row } from 'reactstrap';

import { BiCommentAdd } from "react-icons/bi";
import { useForm } from 'react-hook-form'
const Comments = () => {

    const [open, setopen] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const object = {
            id: comments.length,
            image: ts2,
            name: data.name + data.surname,
            comment: data.comment,
            date: Date.now()
        }
        console.log('data', object)
        setcomments((prev) => [...prev, object])
    }

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

        <div style={{ height: '100%', marginTop: '30px' }} id='Comments'>
            <Container
                style={{
                    margin: 'auto',
                    left: 0, right: 0,
                }}
            >
                <Row style={{ marginBottom: 20 }}>
                    <Row
                        onClick={() => setopen(!open)}
                        style={{
                            marginBottom: '1rem'
                        }}
                    >
                        <Col lg='1' className='addcommenticon'><BiCommentAdd /></Col>
                        <Col lg='11' className='addcomment'>Add Comment</Col>
                    </Row>
                    <Collapse isOpen={open}>
                        <Card>
                            <CardBody>
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <Row >
                                        <Col sm='12' md='6' className='mb-4'>
                                            <Input
                                                className='input'
                                                placeholder='Name'
                                                name='name'
                                                id='name'
                                                innerRef={register({ required: true })}
                                            />
                                            {errors.name?.type === 'required' && "Name is required"}
                                        </Col>
                                        <Col sm='12' md='6' className='mb-4'>
                                            <Input
                                                className='input'
                                                placeholder='Surname'
                                                name='surname'
                                                id='surname'
                                                innerRef={register({ required: true })}

                                            />
                                           <span > {errors.surname?.type === 'required' && "Surname is required"}</span>
                                        </Col>
                                    </Row>
                                    <Row >
                                        <Col sm='12' md='12'>
                                            <Input 
                                            className='input' 
                                            placeholder='Message'  
                                            name='comment'
                                            id='comment'
                                            type='textarea'
                                            innerRef={register({ required: true })}
                                            />
                                            {errors.comment?.type === 'required' && "Comment is required"}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm='12' md='6'>
                                            <Button type='submit' className='mt-4 mb-4 form-button'>Send</Button>
                                        </Col>
                                    </Row>
                                </form>
                            </CardBody>
                        </Card>
                    </Collapse>
                </Row>
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
