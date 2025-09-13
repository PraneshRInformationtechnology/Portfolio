import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={40} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that follows best practices.',
    },
    {
      icon: <Palette size={40} />,
      title: 'Creative Design',
      description: 'Blending aesthetics with functionality for stunning user experiences.',
    },
    {
      icon: <Zap size={40} />,
      title: 'Performance',
      description: 'Optimizing applications for lightning-fast load times and smooth interactions.',
    },
    {
      icon: <Heart size={40} />,
      title: 'User Focus',
      description: 'Putting users first in every design and development decision.',
    },
  ];

  return (
    <section id="about" className="about-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="text-center mb-5" data-aos="fade-up">
              <h2 className="section-title display-4 fw-bold mb-4">About Me</h2>
              <div className="section-divider mx-auto mb-5"></div>
            </div>

            <Row className="align-items-center">
              <Col lg={4} className="text-center mb-4" data-aos="fade-right">
                <div className="avatar-container">
                  <img
                    src="/Pranesh_Photo.jpg"
                    alt="Pranesh R"
                    className="avatar-img"
                  />
                  <div className="avatar-glow"></div>
                </div>
              </Col>

              <Col lg={8} data-aos="fade-left">
                <div className="about-content">
                  <p className="lead mb-4">
                    Hi, I'm <strong>Pranesh R</strong> — an Information Technology undergraduate and aspiring full-stack
                    developer. I’m passionate about building impactful web applications that combine performance,
                    scalability, and great user experience.
                  </p>

                  <p className="mb-4">
                    I have hands-on experience with React, Node.js, and the MERN stack through projects like
                    <em> MyCart</em> (an e-commerce platform) and a <em>Task Management Web App</em>.
                    My internship at Strackit allowed me to sharpen my skills in React.js, Node.js, Git, and GraphQL.
                  </p>

                  <p className="mb-4">
                    Beyond coding, I love exploring UI/UX design trends, solving coding challenges on platforms
                    like HackerRank, and continuously leveling up my development skills.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="mt-5">
              {highlights.map((item, index) => (
                <Col lg={3} md={6} key={index} className="mb-4">
                  <Card
                    className="highlight-card h-100 text-purple-400"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <Card.Body className="text-center">
                      <div className="highlight-icon mb-3">{item.icon}</div>
                      <Card.Title className="h5 mb-3">{item.title}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
