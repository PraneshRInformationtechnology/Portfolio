import React from 'react';
import './skills.css'
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaJava,
  FaPython,
} from 'react-icons/fa';
import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiMysql,
  SiC,
  SiTailwindcss,
  SiBitbucket,
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 size={40} color="#e34c26" /> },
    { name: 'CSS3', icon: <FaCss3Alt size={40} color="#1572b6" /> },
    { name: 'JavaScript', icon: <FaJs size={40} color="#f7df1e" /> },
    { name: 'React.js', icon: <FaReact size={40} color="#61dafb" /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={40} color="#7952b3" /> },
    { name: 'Git', icon: <FaGitAlt size={40} color="#f1502f" /> },
    { name: 'GitHub', icon: <FaGithub size={40} color="#fff" /> },
    { name: 'Express.js', icon: <SiExpress size={40} color="#fff" /> },
    { name: 'Node.js', icon: <FaNodeJs size={40} color="#339933" /> },
    { name: 'MongoDB', icon: <SiMongodb size={40} color="#47a248" /> },
    { name: 'Postman', icon: <SiPostman size={40} color="#ff6c37" /> },
    { name: 'SQL', icon: <SiMysql size={40} color="#00758f" /> },
    { name: 'Java', icon: <FaJava size={40} color="#007396" /> },
    { name: 'C', icon: <SiC size={40} color="#a8b9cc" /> },
    { name: 'Python', icon: <FaPython size={40} color="#3776ab" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss size={40} color="#06b6d4" /> },
    { name: 'Bitbucket', icon: <SiBitbucket size={40} color="#0052cc" /> },
  ];

  return (
    <section id="skills" className="skills-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="text-center mb-5">
              <h2 className="section-title display-5 fw-bold text-white">My Skills</h2>
              <div className="section-divider mx-auto mb-5"></div>
            </div>

            <Row>
              {skills.map((skill, index) => (
                <Col xs={6} md={4} lg={3} className="mb-4" key={index}>
                  <div className="skill-card">
                    {skill.icon}
                    <span className="skill-name">{skill.name}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
