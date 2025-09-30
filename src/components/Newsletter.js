import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FiMail, FiGift, FiTrendingUp, FiUsers } from 'react-icons/fi';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setAlertMessage('Thank you for subscribing! Check your email for a welcome gift.');
      setShowAlert(true);
      setEmail('');
      setTimeout(() => setShowAlert(false), 5000);
    }
  };

  const benefits = [
    {
      icon: <FiGift className="text-white" size={24} />,
      title: 'Exclusive Offers',
      description: 'Get 15% off your first order and access to member-only deals'
    },
    {
      icon: <FiTrendingUp className="text-white" size={24} />,
      title: 'New Arrivals',
      description: 'Be the first to know about our latest handcrafted pieces'
    },
    {
      icon: <FiUsers className="text-white" size={24} />,
      title: 'Artisan Stories',
      description: 'Learn about the talented craftspeople behind our products'
    }
  ];

  return (
    <section className="section-padding position-relative overflow-hidden">
      {/* Background */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: 'linear-gradient(135deg, #8B7D6B 0%, #9CAF88 50%, #D4A5A5 100%)'
        }}
      />

      {/* Animated background patterns */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="position-absolute top-0 start-0 opacity-10"
        style={{ 
          fontSize: '300px',
          transform: 'translate(-50px, -50px)'
        }}
      >
        ✉️
      </motion.div>

      <motion.div
        animate={{ 
          rotate: -360,
          y: [0, -30, 0]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="position-absolute bottom-0 end-0 opacity-10"
        style={{ 
          fontSize: '200px',
          transform: 'translate(50px, 50px)'
        }}
      >
        🎁
      </motion.div>

      <Container className="position-relative z-index-2">
        <Row className="align-items-center">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="badge bg-white text-sage-green px-4 py-2 rounded-pill mb-4 font-weight-medium">
                📧 Stay Connected
              </span>
              
              <h2 className="display-4 font-serif font-bold text-white mb-4">
                Join Our
                <br />
                <span className="text-cream">Artisan Community</span>
              </h2>
              
              <p className="lead text-white opacity-90 mb-5">
                Subscribe to our newsletter and become part of our growing community 
                of home décor enthusiasts. Get exclusive access to new collections, 
                artisan stories, and special offers.
              </p>

              {/* Newsletter Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Form onSubmit={handleSubmit} className="mb-4">
                  <Row className="g-3">
                    <Col md={8}>
                      <div className="position-relative">
                        <FiMail 
                          className="position-absolute top-50 start-0 translate-middle-y text-muted ms-3" 
                          size={20}
                        />
                        <Form.Control
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="ps-5 py-3 border-0 rounded-pill shadow-sm"
                          style={{ fontSize: '16px' }}
                        />
                      </div>
                    </Col>
                    <Col md={4}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="h-100"
                      >
                        <Button
                          type="submit"
                          className="w-100 py-3 border-0 rounded-pill shadow-sm bg-white text-sage-green font-weight-bold"
                          style={{ fontSize: '16px' }}
                        >
                          Subscribe Now
                        </Button>
                      </motion.div>
                    </Col>
                  </Row>
                </Form>

                <AnimatePresence>
                  {showAlert && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Alert variant="success" className="border-0 rounded-pill">
                        <div className="d-flex align-items-center">
                          <FiGift className="me-2" />
                          {alertMessage}
                        </div>
                      </Alert>
                    </motion.div>
                  )}
                </AnimatePresence>

                <p className="small text-white opacity-75">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </motion.div>

              {/* Subscriber Count */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="d-flex align-items-center gap-3 text-white"
              >
                <div className="d-flex">
                  {[...Array(4)].map((_, i) => (
                    <motion.img
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                      src={`https://images.unsplash.com/photo-${
                        ['1494790108755-2616b612b786', '1507003211169-0a1dd7228f2d', '1438761681033-6461ffad8d80', '1472099645785-5658abf4ff4e'][i]
                      }?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80`}
                      alt="Subscriber"
                      className="rounded-circle border border-2 border-white"
                      style={{ 
                        width: '40px', 
                        height: '40px', 
                        objectFit: 'cover',
                        marginLeft: i > 0 ? '-10px' : '0'
                      }}
                    />
                  ))}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 1 }}
                    className="rounded-circle bg-white text-sage-green d-flex align-items-center justify-content-center font-weight-bold border border-2 border-white"
                    style={{ 
                      width: '40px', 
                      height: '40px',
                      marginLeft: '-10px',
                      fontSize: '12px'
                    }}
                  >
                    2K+
                  </motion.div>
                </div>
                <div>
                  <div className="font-weight-bold">Join 2,000+ subscribers</div>
                  <small className="opacity-75">Already part of our community</small>
                </div>
              </motion.div>
            </motion.div>
          </Col>

          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-5 mt-lg-0"
            >
              <Row className="g-4">
                {benefits.map((benefit, index) => (
                  <Col key={index} md={12}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="d-flex align-items-start gap-4 p-4 bg-white bg-opacity-10 backdrop-blur rounded-4 border border-white border-opacity-20"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="bg-white bg-opacity-20 rounded-circle p-3 flex-shrink-0"
                      >
                        {benefit.icon}
                      </motion.div>
                      <div>
                        <h5 className="text-white font-bold mb-2">
                          {benefit.title}
                        </h5>
                        <p className="text-white opacity-75 mb-0">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  </Col>
                ))}
              </Row>

              {/* Newsletter Preview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-4 p-4 bg-white bg-opacity-10 backdrop-blur rounded-4 border border-white border-opacity-20"
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="bg-white bg-opacity-20 rounded-circle p-2">
                    <FiMail className="text-white" size={16} />
                  </div>
                  <div>
                    <div className="text-white font-weight-bold small">Latest Newsletter</div>
                    <div className="text-white opacity-75" style={{ fontSize: '12px' }}>
                      "Autumn Collection & Artisan Spotlight"
                    </div>
                  </div>
                </div>
                <div className="text-white opacity-75 small">
                  "Discover our new autumn collection featuring warm, earthy tones and 
                  meet Maria, the talented potter behind our ceramic collection..."
                </div>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
