import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { gsap } from 'gsap';
import { Download, ChevronRight, Sparkles } from 'lucide-react';

const Home = () => {
  const heroRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    // Initial setup
    gsap.set('.hero-title', { y: 50, opacity: 0 });
    gsap.set('.hero-subtitle', { y: 50, opacity: 0 });
    gsap.set('.hero-tagline', { y: 50, opacity: 0 });
    gsap.set('.hero-buttons', { y: 50, opacity: 0 });

    // Animation sequence
    timeline
      .to('.hero-title', { y: 0, opacity: 1, duration: 1, ease: 'power3.out' })
      .to('.hero-subtitle', { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.8')
      .to('.hero-tagline', { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.6')
      .to('.hero-buttons', { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.4');

    // Floating animation for particles
    gsap.to('.particle', {
      y: -20,
      duration: 2,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.1,
    });

    // Continuous glow animation
    gsap.to('.hero-title', {
      textShadow: '0 0 20px #ff6b9d, 0 0 40px #ff6b9d',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  const createParticles = () => {
    const particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push(
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      );
    }
    return particles;
  };

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      <div className="particles-container" ref={particlesRef}>
        {createParticles()}
      </div>

      <div className="hero-bg-gradient"></div>

      <Container className="h-100">
        <Row className="h-100 align-items-center justify-content-center text-center">
          <Col lg={8}>
            <div className="hero-content">
              <h1 className="hero-title display-1 fw-bold mb-4">
                Pranesh R
                <Sparkles className="title-icon ms-3" size={60} />
              </h1>

              <h2 className="hero-subtitle h3 mb-4 text-gradient">
                Full Stack Developer | IT Undergraduate
              </h2>

              <p className="hero-tagline lead mb-5">
                Passionate about creating impactful applications with optimized performance
                and user-friendly interfaces.
              </p>

              <div className="hero-buttons">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="glow-btn me-4 mb-3"
                  href="#projects"
                >
                  View Projects
                  <ChevronRight className="ms-2" size={20} />
                </Button>

                <Button
                  variant="outline-light"
                  size="lg"
                  className="glow-btn-secondary mb-3"
                  href="/PRANESH_R_IT.pdf"
                  target="_blank"
                >
                  <Download className="me-2" size={20} />
                  Download Resume
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Home;
