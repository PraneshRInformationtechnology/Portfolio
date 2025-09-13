import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Heart, ArrowUp } from 'lucide-react';

const Footer= () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <Container>
        <Row className="align-items-center py-4">
          <Col md={6}>
            <p className="footer-text mb-0">
              © {currentYear} Pranesh R. Made with <Heart size={16} className="heart-icon" /> and lots of anime inspiration.
            </p>
          </Col>
          
          <Col md={6} className="text-md-end">
            <div className="footer-links">
              <a href="#about" className="footer-link me-4">About</a>
              <a href="#projects" className="footer-link me-4">Projects</a>
              <a href="#contact" className="footer-link me-4">Contact</a>
              <button 
                className="scroll-top-btn"
                onClick={scrollToTop}
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col>
            <div className="footer-divider"></div>
            <p className="footer-tagline text-center py-3">
              "The only way to do great work is to love what you do." - Steve Jobs
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;