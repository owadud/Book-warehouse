import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../Images/Banner/banner1.jpg';
import banner2 from '../../Images/Banner/banner2.jpg';
import banner3 from '../../Images/Banner/banner3.jpg';
import ExtraSection from '../ExtraSection/ExtraSection';
import Publisher from '../Publisher/Publisher';
import './Home.css';



const Home = () => {
    return (
        <div>
            <Carousel variant="dark" >
                <Carousel.Item>
               
                    <img 
                        className="d-block w-100" style={{ maxHeight:'350px'}}
                        src={banner1}
                        alt="First slide"
                    />
                     <Carousel.Caption>
                        <h2 className='text-white bg-dark p-2'>“Where is human nature so weak as in the bookstore?”</h2>
                        
                    </Carousel.Caption>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ maxHeight:'350px'}}
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h2 className='text-white bg-dark p-2'>“A room without books is like a body without a soul.”</h2>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ maxHeight:'350px'}}
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h2 className='text-white bg-dark p-2'>“Take a good book to bed with you—books do not snore.”</h2>
                       
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Publisher></Publisher>
            <ExtraSection></ExtraSection>
        </div>
        
    );
};

export default Home;