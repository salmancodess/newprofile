
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import "../Edit/E.css";
import Aos from 'aos';
import "aos/dist/aos.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  }); 

  // Initialize AOS (Animate On Scroll) for animations
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []); 

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    emailjs.send(
      'service_ku0xyvv',       // Your Service ID
      'template_b14qnvb',      // Your Template ID
      formData,                // Form Data to send
      'hTKuaHYs10iZChZN2'      // Your User ID
    )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
        },
        (err) => {
          console.error('FAILED...', err);
          alert('Message failed to send. Please try again.');
        }
      );

    // Clear the form after submission
    setFormData({ email: '', message: '' });
  };

  return (
    <div className="container-fluid">
      <Container id="contact" className="my-5">
        <h2 className="animate-fadeIn">Contact</h2>
        <hr />
        <Row className='animate-fadeIn contact-card'>
          <Col md={6} className="mb-4">
            <Card className="contact-card mt-3" style={{ background: "linear-gradient(to right, #ffffff, #b2d1ff)" }} data-aos="fade-up">
              <Card.Body>
                <Card.Title className="contact-card-title">Get in Touch</Card.Title>
                <Card.Text className="contact-card-text">
                  <strong>Address:</strong> East street, Chakkarappalli,Thanjavur TamilNadu.
                  <br />
                  <strong>Phone:</strong> +91 7708593465
                  <br />
                  <strong>Email:</strong> mohamedsalmanbca@gmail.com
                </Card.Text>
                <Card.Text className="contact-card-links">
                  <a href="www.linkedin.com/in/mohamed-salman-python-django-javascript" target="_blank" rel="noopener noreferrer">  <i className="bi bi-linkedin px-1"></i>
                  </a>
                  <a href="https://github.com/salmancodess" target="_blank" rel="noopener noreferrer"> <i className="bi bi-github px-1"></i></a>
                  <a href="https://www.instagram.com/_salman_2112" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram px-1"></i>
                  </a>
                  <a href="https://wa.me/7708593465" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp px-1"></i></a>

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Form className='mt-3 p-2 border rounded' style={{ background: "linear-gradient(to right, #ffffff, #b2d1ff)" }} data-aos="fade-up" onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" className='my-2' type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;


