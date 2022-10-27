import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

const CourseSummaryCard = ({ course }) => {

    const { _id, title, image_url } = course;


    return (

        <Col className='col-md-4 p-2'>
            <Card className='m-2 p-4' style={{ width: '18rem' }}>
                <Link to={`/course/${_id}`} style={{ textDecoration: 'none' }}>
                    <Card.Title className='mb-3'>{title}</Card.Title>
                    <Card.Img variant="top"  style={{ height: '200px', width:'250px' }} src={image_url} />
                </Link>
            </Card>
        </Col>
    );
};

export default CourseSummaryCard;