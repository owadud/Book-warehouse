import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PublisherDetails = ({ publisher }) => {
    const { supply, description, price, picture, quantity, _id } = publisher;

    const navigate = useNavigate();

    const navigateToProductDetail = id => {
        navigate(`/books/update/${id}`);
    }
    return (
        <div>
            <div className="publisher bg-light p-4">

                <Card>
                    <Card.Img className="text-center" variant="top" src={picture} />
                    <Card.Body className="bg-dark">
                        <Card.Title className='text-light p-2'>Publisher:<span className='text-success'> {supply}</span></Card.Title>
                        
                        <Card.Text className='text-light p-2'>

                            Amount: {price}
                        </Card.Text>
                        <Card.Text className='text-light p-2'>
            
                            Quantity: {quantity}
                        </Card.Text>
                        
                        <Card.Text className='text-justify text-light fst-italic'>

                           <span className='fw-bold'>Description:</span>  {description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='text-end'>
                        
                            <Button onClick={() => navigateToProductDetail(_id)} variant="primary">Update</Button>
                        


                    </Card.Footer>
                </Card>


            </div>
        </div >
    );
};

export default PublisherDetails;