import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/categories')
        .then(res  => res.json())
        .then(data => setCategories(data));
    })


    return (
        <div className='mt-5 text-start'>
            <h5>All Category : {categories.length}</h5>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`} style={{ textDecoration: 'none' }}>{category.name}</Link>
                    </p> )
                }
            </div>
        </div>
    );
};

export default LeftSidebar;