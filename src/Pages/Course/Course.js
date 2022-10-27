import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFilePdf } from 'react-icons/fa';
import { useReactToPrint } from 'react-to-print';

const Course = () => {
    const course = useLoaderData();
    const { title, details, image_url, _id } = course;

    // Pdf
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });


    return (
        <Container className='m-3'>
            <Row>
                <Col lg="2"></Col>
                <Col lg="8">
                    <Card ref={componentRef}>
                        <div className="d-flex justify-content-between">
                            <Card.Title className='ms-4 p-3'>{title}</Card.Title>
                            <button style={{border:'none',backgroundColor:'#FFF'}}><FaFilePdf onClick={handlePrint} className='me-5 mt-3 text-danger' style={{fontSize:'30px'}}></FaFilePdf></button>
                        </div>
                        <Card.Img className='ms-5' variant="top" src={image_url} style={{ width: '500px', height: '400px' }} />
                        <Card.Body>
                            <Card.Text>
                                {details}
                            </Card.Text>
                            {/* <Link to={`/category/${category_id}`}> */}

                            <Link to={`/checkout/course/${_id}`}>
                                <Button variant="primary">Get premium access.</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="2"></Col>
            </Row>
        </Container>

    );
};

export default Course;