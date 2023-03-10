import React, { useContext, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const {createUser, updateUserProfile} = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form     = event.target;
        const name     = form.name.value;
        const photoURL = form.photoURL.value;
        const email    = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('')
            handleUpdateUserProfile(name, photoURL);
            form.reset();  
        })
        .catch(error => {
            console.error(error)
            setError(error.message)
        });
    }

    const handleUpdateUserProfile = (name, photoURL) =>{
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(error => console.error(error));
    }

    return (
        <Container className='m-3'>
            <Row>
                <Col lg="2"></Col>
                <Col lg="7">
                    <Card className='text-dark'>
                        <Card.Title className='p-3 text-center'>Registration Form</Card.Title>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="text" name='name' placeholder="Your Name" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Photo URL</Form.Label>
                                    <Form.Control type="text" name='photoURL' placeholder="Photo URL" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name='password' placeholder="Password" required />
                                </Form.Group>
                                <p>Already have an account ? Please <Link to="/login">Login</Link> </p>



                                <Button variant="primary" type="submit">
                                    Register
                                </Button>
                                <Form.Text className="text-danger">
                                    {error}
                                </Form.Text>
                            </Form>
                        </Card.Body>
                    </Card>

                </Col>
                <Col lg="3"></Col>
            </Row>
        </Container>

    );
};

export default Register;