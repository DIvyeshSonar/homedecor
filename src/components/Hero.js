import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="home" 
      className="min-vh-100 d-flex align-items-center position-relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, rgba(245, 245, 220, 0.9) 0%, rgba(248, 232, 232, 0.9) 100%), 
                     url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80') center/cover`
      }}
    >
      {/* Animated background elements */}
      <motion.div
        className="position-absolute top-0 start-0 w-100 h-100"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      <Container className="position-relative z-index-2">
        <Row className="align-items-center min-vh-100">
          <Col lg={6}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center text-lg-start"
            >
              <motion.div variants={itemVariants}>
                <span className="badge bg-sage-green text-white px-4 py-2 rounded-pill mb-4 font-weight-medium">
                  ✨ Handcrafted with Love
                </span>
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="display-2 font-serif font-bold text-warm-gray mb-4 lh-1"
              >
                Make Your Home
                <br />
                <span className="bg-gradient-to-r from-sage-green to-dusty-rose bg-clip-text text-transparent">
                  Beautiful
                </span>
                <br />
                with Handmade Décor
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="lead text-muted mb-5 fs-5"
              >
                Discover unique, handcrafted home décor pieces that tell a story. 
                Transform your space with artisan-made treasures that reflect your personality.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    as={Link}
                    to="/#shop"
                    size="lg" 
                    className="btn-primary-custom px-5 py-3 d-flex align-items-center gap-2"
                  >
                    Shop Now
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FiArrowRight />
                    </motion.div>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    as={Link}
                    to="/#about"
                    variant="outline-secondary" 
                    size="lg" 
                    className="px-5 py-3 d-flex align-items-center gap-2 border-2"
                  >
                    <FiPlay />
                    Watch Story
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="mt-5 d-flex justify-content-center justify-content-lg-start"
              >
                <div className="d-flex align-items-center gap-4 text-muted">
                  <div className="text-center">
                    <div className="h4 font-bold text-warm-gray mb-0">500+</div>
                    <small>Happy Customers</small>
                  </div>
                  <div className="vr"></div>
                  <div className="text-center">
                    <div className="h4 font-bold text-warm-gray mb-0">100+</div>
                    <small>Unique Products</small>
                  </div>
                  <div className="vr"></div>
                  <div className="text-center">
                    <div className="h4 font-bold text-warm-gray mb-0">5★</div>
                    <small>Average Rating</small>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </Col>

          <Col lg={6} className="d-none d-lg-block">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="position-relative"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="position-relative z-index-2"
              >
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Beautiful handmade home décor"
                  className="img-fluid rounded-4 shadow-lg"
                />
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="position-absolute top-0 end-0 translate-middle"
              >
                <div className="ds-fab p-3">
                  <span className="fs-4">🏺</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="position-absolute bottom-0 start-0 translate-middle"
              >
                <div className="ds-fab p-3">
                  <span className="fs-4">🕯️</span>
                </div>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="position-absolute bottom-4 start-50 translate-middle-x text-center"
      >
        <div className="text-muted small mb-2">Scroll to explore</div>
        <div className="mx-auto bg-warm-gray rounded-pill" style={{ width: '2px', height: '30px' }}>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-sage-green rounded-pill"
            style={{ width: '2px', height: '8px' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
