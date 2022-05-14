import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const PublisherDetails = ({ publisher }) => {
    const { supply, description, price, picture, quantity, email, _id } = publisher;

    const navigate = useNavigate();

    const navigateToProductDetail = id => {
        navigate(`/books/update/${id}`);
    }
    return (
        <div>
            <div className="publisher bg-light p-4">

                <Card>
                    <Card.Img className="text-center" variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title className='text-warning'>{supply}</Card.Title>
                        <Card.Text className="text-info">
                            Supply:{supply}
                        </Card.Text>
                        <Card.Text className='text-light bg-dark p-2'>

                            Amount: {price}
                        </Card.Text>
                        <Card.Text className='text-light bg-dark p-2'>

                            Quantity: {quantity}
                        </Card.Text>
                        <Card.Text className='text-light bg-dark p-2'>

                            Email: {email}
                        </Card.Text>
                        <Card.Text>

                            Description: {description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer  >
                        
                            <Button onClick={() => navigateToProductDetail(_id)} variant="primary">Update</Button>
                        


                    </Card.Footer>
                </Card>


            </div>
        </div >
    );
};

export default PublisherDetails;