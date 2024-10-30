import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "../Edit/E.css";
import Aos from 'aos';
import "aos/dist/aos.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import imgjs from "../assets/download.png"
 import {FaPython, FaCode, FaServer, FaDatabase} from 'react-icons/fa';
        import {SiMongodb} from 'react-icons/si';


const Skill = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Container className='py-2'>
      <Row className="animate-fadeIn">
        <Col>
          <h3>Skills</h3>
          <hr />
        </Col>
      </Row>
      <Row className="animate-fadeIn py-5">
       

        {/* Python Section */}
        <Col md={4} className="mb-4">
          <Card data-aos="fade-up" style={{ border: "none" }} className='py-2'>
            <Card.Body style={{ minHeight: "0px" }}>
              <FaPython size={50} className="mb-3" color="#3776AB" />
              <Card.Title>Python</Card.Title>
              <Card.Text style={{ color: "gray" }}>
                Advanced proficiency in Python, developing efficient and scalable back-end applications with a strong emphasis on modular and object-oriented programming.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Django Section */}
        <Col md={4} className="mb-4">
          <Card data-aos="fade-up" style={{ border: "none" }} className='py-2'>
            <Card.Body style={{ minHeight: "0px" }}>
              <FaCode size={50} className="mb-3" color="#092E20" />
              <Card.Title>Django</Card.Title>
              <Card.Text style={{ color: "gray" }}>
                Expertise in Django, building powerful web applications with secure authentication, admin panel integration, and efficient database management.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* REST API Section */}
        <Col md={4} className="mb-4">
          <Card data-aos="fade-up" style={{ border: "none" }} className='py-2'>
            <Card.Body style={{ minHeight: "0px" }}>
              <FaServer size={50} className="mb-3" color="#28A745" />
              <Card.Title>Django REST API</Card.Title>
              <Card.Text style={{ color: "gray" }}>
                Proficient in Django REST framework, creating scalable and secure RESTful APIs for seamless integration with front-end and third-party services.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* MySQL Section */}
        <Col md={4} className="mb-4">
          <Card data-aos="fade-up" style={{ border: "none" }} className='py-2'>
            <Card.Body style={{ minHeight: "0px" }}>
              <FaDatabase size={50} className="mb-3" color="#00758F" /> {/* MySQL icon */}
              <Card.Title>MySQL</Card.Title>
              <Card.Text style={{ color: "gray" }}>
                Proficient in MySQL, handling complex queries, database design, and optimization for scalable and high-performance applications.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* MongoDB Section */}
        <Col md={4} className="mb-4">
          <Card data-aos="fade-up" style={{ border: "none" }} className='py-2'>
            <Card.Body style={{ minHeight: "0px" }}>
              <SiMongodb size={50} className="mb-3" color="#4DB33D" /> {/* MongoDB icon */}
              <Card.Title>MongoDB</Card.Title>
              <Card.Text style={{ color: "gray" }}>
                Skilled in MongoDB, working with NoSQL databases for flexible and scalable data storage solutions in dynamic applications.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card data-aos="fade-up" style={{ border: "none" }} className='py-2'>
            <Card.Body style={{ minHeight: "0px", backgroundcolor: "rgb(248, 255, 253)" }}>
              <FaHtml5 size={50} className="mb-3" color="#E34F26" />
              <FaCss3Alt size={50} className="mb-3" color="#1572B6" />
              <Card.Title>HTML & CSS</Card.Title>
              <Card.Text style={{ color: "gray" }}>
                Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card data-aos="fade-up" style={{border:"none"}} className='py-2'>
            <Card.Body style={{minHeight:"0px"}}>
              {/* <FaJs size={50} className="mb-3" color="#fffff" /> */}
              <img src={imgjs} width={100} alt="" />
              <Card.Title>JavaScript</Card.Title>
              <Card.Text style={{color:"gray"}}>
                Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card data-aos="fade-up" style={{border:"none"}} className='py-2'>
            <Card.Body style={{minHeight:"0px"}}>
              <FaReact size={50} className="mb-3" color="#61DAFB" />
              <Card.Title>React</Card.Title>
              <Card.Text  style={{color:"gray"}}>
                Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
        
export default Skill;
