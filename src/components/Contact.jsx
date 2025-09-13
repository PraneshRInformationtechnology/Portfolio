import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Send, Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('success'); // ✅ fixed TypeScript syntax

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    // Simulate form submission
    setAlertType('success');
    setAlertMessage("Message sent successfully! I'll get back to you soon.");
    setShowAlert(true);
    reset();

    // Hide alert after 5 seconds
    setTimeout(() => setShowAlert(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: 'r.pranesh001@gmail.com',
      link: 'mailto:r.pranesh001@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: '+91 63692 45478',
      link: 'tel:+916369245478',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      details: 'Vellakovil, Tiruppur, India',
      link: '#',
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com/PraneshRInformationtechnology',
      color: '#333',
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/pranesh-r-083827257',
      color: '#0077b5',
    },
  ];

  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="text-center mb-5" data-aos="fade-up">
              <h2 className="section-title display-4 fw-bold mb-4">Let's Connect</h2>
              <div className="section-divider mx-auto mb-5"></div>
              <p className="lead">
                Ready to start your next project? Let’s create something impactful together!
              </p>
            </div>

            <Row>
              {/* Contact Form */}
              <Col lg={8} className="mb-5">
                <div className="contact-form-container" data-aos="fade-right">
                  <h3 className="h4 mb-4 text-gradient">Send Me a Message</h3>

                  {showAlert && (
                    <Alert variant={alertType} className="mb-4">
                      {alertMessage}
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            className="glow-input"
                            placeholder="Your Name"
                            {...register('name', { required: 'Name is required' })}
                            isInvalid={!!errors.name}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.name?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            className="glow-input"
                            placeholder="your.email@example.com"
                            {...register('email', {
                              required: 'Email is required',
                              pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Invalid email address',
                              },
                            })}
                            isInvalid={!!errors.email}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.email?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-4">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        className="glow-input"
                        placeholder="What's this about?"
                        {...register('subject', { required: 'Subject is required' })}
                        isInvalid={!!errors.subject}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.subject?.message}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        className="glow-input"
                        placeholder="Tell me about your project..."
                        {...register('message', {
                          required: 'Message is required',
                          minLength: {
                            value: 10,
                            message: 'Message must be at least 10 characters',
                          },
                        })}
                        isInvalid={!!errors.message}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.message?.message}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Button type="submit" variant="primary" size="lg" className="glow-btn w-100">
                      <Send className="me-2" size={20} />
                      Send Message
                    </Button>
                  </Form>
                </div>
              </Col>

              {/* Contact Info + Social */}
              <Col lg={4}>
                <div className="contact-info" data-aos="fade-left">
                  <h3 className="h4 mb-4 text-gradient">Get in Touch</h3>

                  <div className="contact-details mb-5">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="contact-item mb-4">
                        <div className="contact-icon">{info.icon}</div>
                        <div className="contact-content">
                          <h5 className="contact-title">{info.title}</h5>
                          <a href={info.link} className="contact-link">
                            {info.details}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="social-links">
                    <h5 className="mb-3">Follow Me</h5>
                    <div className="social-buttons">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-btn"
                          style={{ '--social-color': social.color }}
                          title={social.name}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
