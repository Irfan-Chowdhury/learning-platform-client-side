import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Course = () => {
    const course = useLoaderData();
    const {title, details, image_url, category_id} = course;

    return (
        <Card>
            <Card.Title>{title}</Card.Title>
            <Card.Img variant="top" src={image_url} style={{width:'500px',height:'400px'}}/>
            <Card.Body>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button variant="primary">All news in the Category</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default Course;