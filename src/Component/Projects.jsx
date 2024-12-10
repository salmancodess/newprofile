import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import img from "../../src/assets/86.png";
import img1 from "../../src/assets/";
import Aos from 'aos';
import "aos/dist/aos.css";

const Projects = () => {
    const projectList = [
        { title: 'Portfolio Website', description: 'A personal portfolio website to showcase my skills, projects, and experience. Built with HTML,CSS,JavaScript, Bootstrap, and Sass.', imgSrc: img, Url: "github.com" },
        { title: 'Blog Application', description: 'create a blog Application build with Django .design professional, resuable templates,with SEO slugs.then implemented pagination,contact form,dynamic content., ', imgSrc: img1, Url: "https://github.com/salmancodess/blog-projects.git" },
        { title: 'Task Management System', description: 'Develop a task management system using laravel,php,mysql for efficient task creation,editing,update,delete.m ', imgSrc: img, Url: "https://github.com/salmancodess/todo-list-." }
        // Add more projects here
    ];

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const [minHeight, setMinHeight] = useState("400px");

    useEffect(() => {
      const updateHeight = () => {
        if (window.innerWidth <= 576) {
          setMinHeight("300px"); // For small devices
        } else if (window.innerWidth <= 768) {
          setMinHeight("400px"); // For medium devices
        } else {
          setMinHeight("450px"); // For large devices and above
        }
      };
  
      window.addEventListener('resize', updateHeight);
      updateHeight(); // Call the function initially
  
      return () => window.removeEventListener('resize', updateHeight);
    }, []);
    return (
        <div>
            <h2 className="text-center">Projects</h2>
            <hr />
            <Container id="projects" className="my-5">
                <Row>
                    {projectList.map((project, index) => (
                        <Col md={4} sm={6} xs={12} key={index}>
                            <Card className="mb-4" data-aos="zoom-in" style={{ minHeight }}>
                                <Card.Img variant="top"src={project.imgSrc} fluid />
                                {/* <img src={project.imgSrc} className='image-fluid' alt="" /> */}
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text style={{ color: "gray" }}>{project.description}</Card.Text>
                                    <Card.Text>
                                        <a href={project.Url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#007bff" }}>
                                            {project.Url}
                                        </a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Projects;
