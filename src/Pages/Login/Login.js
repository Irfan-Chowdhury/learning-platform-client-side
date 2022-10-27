import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, ButtonGroup, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const {signIn, providerLogin, setLoading} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Log In with Google
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate('/');
        })
        .catch(error => {
            console.error(error)
            setError(error.message)
        });
    }

    // Log In with GitHub
    const handleGitHubSignIn = () => {
        providerLogin(githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate('/');
        })
        .catch(error => {
            console.error(error)
            setError(error.message)
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log('user',user);
            form.reset();
            navigate(from, {replace:true});
        })
        .catch(error => {
            console.error(error)
            setError(error.message)
        })
        .finally(()=>{
            setLoading(false);
        });
    }

    return (
        <Container>
            <Row>
                <Col lg="2"></Col>
                <Col lg="7">
                    <Card className='text-dark'>
                        <Card.Title className='p-3 text-center'>Login Form</Card.Title>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name='password' placeholder="Password" required />
                                </Form.Group>

                                <p>Already register ? Please goto <Link to="/register">Registration</Link> </p>

                                <Form.Text className="text-danger">
                                    {error}
                                </Form.Text>
                                <ButtonGroup className='ms-5 ps-5 text-center' vertical>
                                    <Button className='mb-2 btn-lg' variant="primary" type="submit">
                                        Login
                                    </Button>
                                    <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                                    <Button onClick={handleGitHubSignIn} variant="outline-dark"> <FaGithub></FaGithub> Login with GitHub</Button>
                                </ButtonGroup>
                            </Form>
                        </Card.Body>
                    </Card>

                </Col>
                <Col lg="3"></Col>
            </Row>
        </Container>
    );
};

export default Login;