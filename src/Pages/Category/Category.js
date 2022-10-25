import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const categoryWiseCourse = useLoaderData();

    return (
        <div>
            <h4>This is Category has: {categoryWiseCourse.length} data</h4>
        </div>
    );
};

export default Category;