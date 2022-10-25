import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';

const Category = () => {
    const categoryWiseCourse = useLoaderData();

    return (
        <div>
            <h4>This is Category has: {categoryWiseCourse.length} data</h4>
            {
                categoryWiseCourse.map(course => <CourseSummaryCard
                    key={course._id}
                    course={course}
                ></CourseSummaryCard> )
            }
        </div>
    );
};

export default Category;