import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const services = [
    {
        title: 'Premium Rooms',
        description: 'Luxurious rooms with all modern amenities.',
        imgUrl: 'https://3.imimg.com/data3/GD/VB/IMFCP-8335443/images-standard-500x500.jpg'
    },
    {
        title: 'Affordable Rates',
        description: 'Competitive pricing with no hidden charges.',
        imgUrl: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/best-price-logo-design-template-a3a5956402aaaf635fbdfcbbcad736b8_screen.jpg?ts=1660552561'
    },
    {
        title: '24/7 Customer Support',
        description: 'Round-the-clock support for all your queries.',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbPho1xDTnd_YZo7e7dv70571TV8tJ0OKa5w&s'
    },
    {
        title: 'Easy Booking',
        description: 'Simple and fast booking process through our website.',
        imgUrl: 'https://cdn.dribbble.com/users/2363621/screenshots/11477120/media/5e1bc85384c07f354080b0117459c0d5.png'
    }
];

const OurServices = () => {
    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Our Services</h2>
            <Row>
                {services.map((service, index) => (
                    <Col key={index} md={6} lg={3} className="mb-4">
                        <Card>
                            <Card.Img 
                                variant="top" 
                                src={service.imgUrl} 
                                className="img-fluid" // Make image responsive
                                style={{ height: '200px', objectFit: 'cover' }} // Inline style for height and fit
                            />
                            <Card.Body>
                                <Card.Title>{service.title}</Card.Title>
                                <Card.Text>{service.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default OurServices;
