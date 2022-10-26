import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../logo.png';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then( () => {})
        .catch(error => console.error(error));
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" to='/'>
                        <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top" />E-Knowledge
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'>Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page">FAQ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page">Blog</Link>
                            </li>
                            <li className="form-check form-switch">
                                <input className="form-check-input mt-3 mx-4" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label mt-2 " htmlFor="flexSwitchCheckDefault">Theme Color</label>
                            </li>
                        </ul>
                        <form className="d-flex">
                                {
                                    user?.uid ?
                                    <>
                                        <Link to='/profile' style={{ border: 'none' }}>
                                            {
                                                user?.photoURL ?
                                                <Image title={user?.displayName} style={{height:'30px'}} roundedCircle src={user.photoURL}></Image>
                                                : <FaUser></FaUser>
                                            }
                                        </Link>
                                        <Button className="ms-2 btn btn-light text-dark btn-outline-danger" onClick={handleLogOut}>Log Out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login' className="btn btn-outline-success mx-2" aria-current="page">Login</Link>
                                        <Link to='/register' className="btn btn-outline-success" aria-current="page">Register</Link>
                                    </>
                                }                            
                        </form>
                    </div>
                </div>
            </nav>
        </div>


        // <div>
        //     <nav className="navbar navbar-light bg-light">
        //         <div className="container">
        //             <Link className="navbar-brand">
        //                 <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top" />E-Knowledge
        //             </Link>
        //             <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        //                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                     <li className="nav-item">
        //                         <Link className="nav-link active" aria-current="page">Home</Link>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </div>
    );
};

export default Header;