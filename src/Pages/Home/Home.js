import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';

const Home = () => {
    const allCourses = useLoaderData();
    
    return (
        <div>
            <h2>Dragon News {allCourses.length}</h2>
            {
            allCourses.map(course => <CourseSummaryCard
                key={course._id}
                course={course}
            ></CourseSummaryCard>)
            
            }
        </div>
    );
};

export default Home;