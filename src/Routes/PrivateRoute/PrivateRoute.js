import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}   = useContext(AuthContext);
    const location = useLocation(); // লগিন করার পর কাংখিত পেজে নিয়ে যাবার জন্য, যেটাতে যেতে গিয়ে লগিন পেজে পাঠাই দিতো

    if(loading){
        return <Spinner animation="border" variant="primary" />
    }

    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;