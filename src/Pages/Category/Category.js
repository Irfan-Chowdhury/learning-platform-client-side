import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';

const Category = () => {
    const categoryWiseCourse = useLoaderData();

    return (
        <div>
            <h4>This category has: {categoryWiseCourse.length} data</h4>
            <Container>
                <Row>
                    {
                        categoryWiseCourse.map(course => <CourseSummaryCard
                            key={course._id}
                            course={course}
                        ></CourseSummaryCard> )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Category;