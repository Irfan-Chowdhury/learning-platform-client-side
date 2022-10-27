import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSidebar from '../Pages/Shared/LeftSidebar/LeftSidebar';

const Main = () => {
    const {toggle} = useContext(AuthContext);

    return (
        <div className={`${!toggle ? 'bg-light text-dark' : 'bg-dark text-light'}`}>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="2" className="d-none d-lg-block">
                        <LeftSidebar></LeftSidebar>
                    </Col>
                    <Col lg="10">
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;