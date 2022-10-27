import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';

const Home = () => {
    const allCourses = useLoaderData();

    return (
        <div>
            <Container>
                <Row>
                    {
                        allCourses.map(course => <CourseSummaryCard
                            key={course._id}
                            course={course}
                        ></CourseSummaryCard>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Home;