import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "../Edit/E.css"; // Adjust this path if needed
import Aos from 'aos';
import "aos/dist/aos.css"


const services = [
  {
    title: "Web Development",
    description: "Creating responsive and dynamic websites using modern technologies like React.js, HTML5, CSS3, and JavaScript.",
    icon: "bi bi-laptop",
  },
  {
    title: "Canvas",
    description: "design logo, posters, video editing, with a hands-on experience, create a responsive user interaction.",
    icon: "bi bi-hurricane",
  },
  {
    title: "E-commerce",
    description: "Creating responsive and dynamic websites using a Django and Fastapi . ",
    icon: "bi bi-bag",
  },
  {
    title: "Task Mangement Websites",
    description: "Building scalable and secure e-commerce platforms tailored to your business needs.",
    icon: "bi bi-cart4",
  },
];

const Services = () => {


  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="py-5 bg-lightblue">
      <Container>
        <h2 className="text-center mb-5 animate-fadeIn">My Services</h2>
        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={6} lg={3} key={index} className="animate-fadeIn">
              <Card className="h-100 shadow-sm" style={{ background: "linear-gradient(to right, #ffffff, #b2d1ff)", border: "none" }} data-aos="zoom-in">
                <Card.Body className="text-center">
                  <i className={`${service.icon} text-info mb-3`} style={{ fontSize: "3rem" }}></i>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text style={{ fontWeight: "600", fontStyle: "oblique" }}>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
