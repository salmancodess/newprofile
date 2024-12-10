import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Typewriter from "typewriter-effect";
import paner from "../assets/Pasted image-ND94dH5D.png"
import "../Edit/E.css";


// Import the PDF file
import resumePDF from '../assets/Ajeem_A.pdf'; // Adjust the path according to where you placed the PDF
import Aos from 'aos';
import "aos/dist/aos.css"




const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="" style={{ padding: "100px 0px" }}>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col md={6} sm={12} className="text-md-left mb-4 mb-md-0" data-aos="fade-up">
            <div>
              <span className='text-info animate-fadeIn'>Hi there!</span>
              <div className='fs-1'>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 80,
                    strings: "I'm Mohamed Salman S"
                  }}
                />
              </div>
              <h4 className='animate-fadeIn text-info ' style={{ fontWeight: "900", fontSize: "30px" }}>Full-Stack Developer...</h4>
              <div className='my-3 animate-rotateWave'>
                <a href="www.linkedin.com/in/mohamed-salman-python-django-javascript" target="_blank" rel="noopener noreferrer">  <i className="bi bi-linkedin px-1"></i>
                </a>
                <a href="https://github.com/salmancodess" target="_blank" rel="noopener noreferrer"> <i className="bi bi-github px-1"></i></a>
                <a href="https://www.instagram.com/_salman_2112" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram px-1"></i>
                </a>
                <a href="https://wa.me/7708593465" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp px-1"></i></a>


              </div>
              <Button
                className="bg-info border rounded text-white mt-4 px-3 py-1 animate-fadeIn"
                onClick={() => window.location.href = "mailto:mohamedsalmanbca@gmail.com@gmail.com?subject=Job Opportunity&body=Hi, I would like to connect regarding..."}
              >
                Hire Me!
              </Button>
              <Button

              href={resumePDF}  // Link to the imported PDF file
              target="_blank"
              className='bg-info border rounded text-white mt-4 px-3 mx-3 py-1 animate-fadeIn'
              >
              Resume
            </Button>
          </div>
        </Col>

        <Col md={6} sm={12} className="text-center" data-aos="fade-down">
          <img className='img-fluid mt-3 animate-shake' src={paner} alt="Interview Illustration" />
        </Col>
      </Row>
    </Container>
    </div >
  );
};

export default Home;
