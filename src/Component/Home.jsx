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
                    strings: "I'm ALI AJEEM A"
                  }}
                />
              </div>
              <h4 className='animate-fadeIn text-info ' style={{ fontWeight: "900", fontSize: "30px" }}>Full-Stack Developer...</h4>
              <div className='my-3 animate-rotateWave'>
                <a href="https://www.linkedin.com/in/ali-ajeem-a-3a3588255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">  <i className="bi bi-linkedin px-1"></i>
                </a>
                <a href="https://github.com/Ajeem0908/Ajeem0908" target="_blank" rel="noopener noreferrer"> <i className="bi bi-github px-1"></i></a>
                <a href="https://www.instagram.com/aji__ajeem?igsh=MmJqZG5rZXQ3b3Jt" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram px-1"></i>
                </a>
                <a href="https://whatsapp.com/dl/" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp px-1"></i></a>


              </div>
              <Button
                className="bg-info border rounded text-white mt-4 px-3 py-1 animate-fadeIn"
                onClick={() => window.location.href = "mailto:ajiajeem2001@gmail.com?subject=Job Opportunity&body=Hi, I would like to connect regarding..."}
              >
                Hire Me!
              </Button>
              <Button

              href={resumePDF}  // Link to the imported PDF file
              target="_blank"
              className='bg-info border rounded text-white mt-4 px-3 py-1 animate-fadeIn'
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
