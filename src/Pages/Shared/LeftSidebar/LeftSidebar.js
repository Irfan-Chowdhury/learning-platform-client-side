import React, { useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=> {
        fetch('https://learning-server-sigma.vercel.app/categories')
        .then(res  => res.json())
        .then(data => setCategories(data));
    })


    return (
        <div className='mt-5 text-start'>
            <h5>All Category : {categories.length}</h5>
            
            <Card>
                <ListGroup variant="flush">
                    {
                        categories.map(category => <p key={category.id}>
                         <ListGroup.Item><Link to={`/category/${category.id}`} style={{ textDecoration: 'none' }}>{category.name}</Link></ListGroup.Item>
                        </p> )
                    }
                </ListGroup>
            </Card>
        </div>
    );
};

export default LeftSidebar;