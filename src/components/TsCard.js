import React from 'react'
import { Col, Row } from 'reactstrap'
import { BsTrash } from "react-icons/bs";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const TsCard = ({ comment, comments, setcomments }) => {
    return (
        <div className='test-container'>
            <Row>
                <Col>
                    <div className='test-image-container'>
                        <LazyLoadImage src={comment.image} alt={'a'} style={{ borderRadius: 60, position: 'relative', marginTop: -50 }} />
                    </div>
                </Col>
                <Col style={{ textAlignLast: 'end' }}>
                    <BsTrash className='icon' onClick={() => {
                        setcomments(comments.filter(x => x.id !== comment.id))
                    }} />
                </Col>

            </Row>
            <Row>
                <div style={{padding:20}}>
                    {comment.comment}
                </div>
            </Row>
        </div>
    )
}

export default TsCard
