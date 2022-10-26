import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

const CourseSummaryCard = ({ course }) => {

    const { _id, title, image_url } = course;


    return (

        <Col className='col-md-4 p-2'>
            <Card className='m-2 p-4' style={{ width: '18rem' }}>
                <Link to={`/course/${_id}`} style={{ textDecoration: 'none' }}>
                    <Card.Title className='mb-3'>{title}</Card.Title>
                    <Card.Img variant="top"  style={{ height: '200px', width:'250px' }} src={image_url} />
                </Link>
            </Card>
        </Col>






        // <Card className="mb-5">
        //     <Card.Header className='d-flex justify-content-between align-items-center'>
        //         <div className='d-flex'>
        //             <Image
        //                 roundedCircle
        //                 className='me-2'
        //                 src={author?.img}
        //                 style={{height:'60px'}}
        //             ></Image>
        //             <div>
        //                 <p className='mb-0'>{author?.name}</p>
        //                 <p>{author?.published_date}</p>
        //             </div>
        //         </div>
        //         <div>
        //             <FaRegBookmark className='me-2'></FaRegBookmark>
        //             <FaShareAlt></FaShareAlt>
        //         </div>
        //     </Card.Header>
        //     <Card.Body>
        //         <Card.Title>{title}</Card.Title>
        //         <Card.Img variant='top' src={image_url} />
        //         <Card.Text>
        //             {
        //                 details.length > 200 ?
        //                 <>{details.slice(0,250) + '...'} <Link to={`/course/${_id}`}>Read More</Link> </>
        //                 :
        //                 details
        //             }
        //         </Card.Text>
        //     </Card.Body>
        //     <Card.Footer className="d-flex justify-content-between">
        //         <div>
        //             <FaStar className='text-warning me-3'></FaStar>
        //             <span>{rating?.number}</span>
        //         </div>
        //         <div>
        //             <FaEye className='me-2'></FaEye>
        //             <span>{total_view}</span>
        //         </div>
        //     </Card.Footer>
        // </Card>
    );
};

export default CourseSummaryCard;