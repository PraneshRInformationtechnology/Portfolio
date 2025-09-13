import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Calendar, MapPin, Star } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'education',
      title: 'B.Tech in Information Technology',
      company: 'KSR Institute for Engineering and Technology',
      location: 'Tiruchengode',
      period: '2022 - 2026',
      description:
        'Pursuing B.Tech in Information Technology with coursework in web technologies, databases, and software engineering.',
      achievements: [
        'Consistent academic performance',
        'Active in coding contests & hackathons',
        'CGPA : 8.89/10',
      ],
    },
    {
      id: 2,
      type: 'work',
      title: 'Full Stack Intern',
      company: 'Strackit',
      location: 'Coimbatore',
      period: '2024',
      description:
        'Worked as a Full Stack Developer Intern, building scalable web apps using MERN stack.',
      achievements: [
        'Hands-on experience with React, Node.js, Express, MongoDB',
        'Developed and optimized web application modules',
        'Collaborated with senior developers on real-world projects',
      ],
    },
    {
      id: 3,
      type: 'education',
      title: 'Python Programming Certificate',
      company: 'GUVI',
      location: 'Online',
      period: '2022',
      description:
        'Completed a certification course in Python programming covering fundamentals and data structures.',
      achievements: [
        'Learned Python basics & problem solving',
        'Solved coding challenges',
        'Applied skills in small projects',
      ],
    },
    {
      id: 4,
      type: 'education',
      title: 'Web Development Certificate',
      company: 'SoloLearn',
      location: 'Online',
      period: '2023',
      description:
        'Certification in web development with focus on HTML, CSS, and JavaScript.',
      achievements: [
        'Built responsive mini projects',
        'Strengthened front-end fundamentals',
        'Gained practical web development experience',
      ],
    },
  ];

  const TimelineItem = ({ experience, index }) => (
    <div
      className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
      data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
      data-aos-delay={index * 100}
    >
      <div className="timeline-marker">
        <div className={`timeline-icon ${experience.type}`}>
          <Star size={20} />
        </div>
      </div>

      <Card className="timeline-card">
        <Card.Body>
          <div className="timeline-header mb-3">
            <h4 className="timeline-title">{experience.title}</h4>
            <h5 className="timeline-company text-gradient">{experience.company}</h5>
            <div className="timeline-meta">
              <span className="timeline-period">
                <Calendar size={16} className="me-1" />
                {experience.period}
              </span>
              <span className="timeline-location">
                <MapPin size={16} className="me-1" />
                {experience.location}
              </span>
            </div>
          </div>

          <p className="timeline-description mb-3 text-purple-200">{experience.description}</p>

          <div className="timeline-achievements">
            <h6 className="achievements-title mb-2">Key Achievements:</h6>
            <ul className="achievements-list">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="achievement-item">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </Card.Body>
      </Card>
    </div>
  );

  return (
    <section id="experience" className="experience-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="text-center mb-5" data-aos="fade-up">
              <h2 className="section-title display-4 fw-bold mb-4">My Journey</h2>
              <div className="section-divider mx-auto mb-5"></div>
              <p className="lead">
                Every great adventure has its story. Here's mine through the lens of learning and growth.
              </p>
            </div>

            <div className="timeline-container">
              <div className="timeline-line"></div>
              {experiences.map((experience, index) => (
                <TimelineItem key={experience.id} experience={experience} index={index} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
