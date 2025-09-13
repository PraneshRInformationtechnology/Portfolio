import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'MyCart - E-commerce Website',
      description:
        'A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and secure checkout. Built with MERN stack for scalability.',
      image:
        'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      liveUrl: '#',
      githubUrl: 'https://github.com/PraneshRInformationtechnology/Mycart-Ecommerce',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'A productivity application to manage daily tasks, track progress, and collaborate with teams. Features include authentication, CRUD operations, and dashboard view.',
      image:
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      liveUrl: '#',
      githubUrl: 'https://github.com/PraneshRInformationtechnology/TODO-LIST',
      featured: true,
    },
    {
      id: 3,
      title: 'WildScroll',
      description:
        'A creative website showcasing smooth scroll animations, parallax effects, and modern UI design built purely with HTML, CSS, and JavaScript.',
      image:
        'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: '#',
      githubUrl: 'https://github.com/PraneshRInformationtechnology/WildSlider',
      featured: true,
    },
  ];

  const ProjectCard = ({ project, index }) => (
    <Col lg={4} md={6} className="mb-4" key={project.id}>
      <Card
        className={`project-card h-100 ${
          project.featured ? 'featured-project' : ''
        }`}
        data-aos="fade-up"
        data-aos-delay={index * 100}
      >
        <div className="project-image-container">
          <Card.Img
            variant="top"
            src={project.image}
            alt={project.title}
            className="project-image"
          />
          <div className="project-overlay">
            <div className="project-links">
              <Button
                variant="outline-light"
                size="sm"
                href={project.liveUrl}
                className="me-2"
              >
                <Eye size={16} />
              </Button>
              <Button
                variant="outline-light"
                size="sm"
                href={project.githubUrl}
              >
                <Github size={16} />
              </Button>
            </div>
          </div>
        </div>

        <Card.Body className="d-flex flex-column ">
          <Card.Title className="h5 mb-3 text-white">{project.title}</Card.Title>
          <Card.Text className="flex-grow-1 mb-3 text-purple-200">
            {project.description}
          </Card.Text>

          <div className="project-technologies mb-3">
            {project.technologies.map((tech) => (
              <Badge key={tech} bg="primary" className="me-2 mb-2 tech-badge">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="project-actions">
            <Button
              variant="outline-primary"
              size="sm"
              href={project.liveUrl}
              className="me-2 glow-btn-small"
            >
              <ExternalLink size={16} className="me-1" />
              Live Demo
            </Button>
            <Button
              variant="outline-secondary"
              size="sm"
              href={project.githubUrl}
              className="glow-btn-small"
            >
              <Github size={16} className="me-1" />
              Code
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );

  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="text-center mb-5" data-aos="fade-up">
              <h2 className="section-title display-4 fw-bold mb-4">
                Featured Projects
              </h2>
              <div className="section-divider mx-auto mb-5"></div>
              <p className="lead">
                A collection of my real-world projects that demonstrate my
                development skills and creativity.
              </p>
            </div>

            <Row>
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </Row>

            <div className="text-center mt-5" data-aos="fade-up">
              <Button
                variant="outline-primary"
                size="lg"
                href="https://github.com"
                target="_blank"
                className="glow-btn"
              >
                <Github className="me-2" size={20} />
                View All Projects on GitHub
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
