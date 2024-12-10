import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import img from "../assets/interview-concept-illustration_114360-1678.avif"
import "../Edit/E.css";
import Aos from 'aos';
import "aos/dist/aos.css";

const About = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Container id="about" className="my-5">
      <Row className="animate-fadeIn">
        <Col>
          <h3>About Me</h3>
          <hr />
        </Col>
      </Row>
      <Row className="animate-fadeIn mb-4 py-2">
        <Col sm={12} md={6} className="text-center mb-4 mb-md-0" data-aos="zoom-in">
          <img
            className="img-fluid"
            style={{ maxHeight: "430px", border: "none" }}
            src={img}
            alt="Illustration of a Job Interview"
          />
        </Col>
        <Col sm={12} md={6}>
          <Card className="border-0" data-aos="zoom-in">
            <Card.Body className='p-0 mt-1'>
              <Card.Title>
                <h3 className="mt-1 text-info">Hi, I'm Mohamed Salman S</h3>
              </Card.Title>
              <Card.Text className="text-muted">
                <ul className="list-unstyled">
                  <li className='mt-3 custom-list-item'>
                    "I'm a passionate python developer with experience in building responsive and dynamic web applications in Django. I specialize front-end development and have strong proficiency in back-end technologies like Django, and databases such as Mysql. With a solid foundation in HTML, CSS, JavaScript, and FastAPI design, I deliver end-to-end solutions that are both scalable and efficient."                  </li>
                  <li className='mt-3 custom-list-item'>
                    With a keen eye for design and a knack for problem-solving , I strive to build user-friendly and visually appealing interfaces. I love collaborating with teams and continuously learning new technologies to enhance my skills and grow.
                  </li>
                  {/* <li className='mt-3 custom-list-item'>
                    When I'm not coding, you might find me exploring new tech trends, designing UI/UX prototypes, or enjoying a good book. Feel free to reach out if you'd like to discuss potential projects or opportunities!
                  </li> */}
                </ul>

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
