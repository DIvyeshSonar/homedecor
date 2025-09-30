import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FiArrowRight, FiGift, FiTruck, FiShield } from 'react-icons/fi';

const CallToAction = () => {
  const features = [
    {
      icon: <FiGift className="text-white" size={24} />,
      title: 'Handcrafted Quality',
      description: 'Each piece is carefully made by skilled artisans'
    },
    {
      icon: <FiTruck className="text-white" size={24} />,
      title: 'Free Shipping',
      description: 'Free delivery on orders over $75'
    },
    {
      icon: <FiShield className="text-white" size={24} />,
      title: 'Satisfaction Guarantee',
      description: '30-day return policy for your peace of mind'
    }
  ];

  return (
    <section className="section-padding position-relative overflow-hidden">
      {/* Background */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>

      {/* Animated background elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="position-absolute top-10 start-10 opacity-10"
        style={{ fontSize: '200px' }}
      >
        🏺
      </motion.div>

      <motion.div
        animate={{ 
          rotate: -360,
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="position-absolute bottom-10 end-10 opacity-10"
        style={{ fontSize: '150px' }}
      >
        🕯️
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
              <span className="badge bg-dusty-rose text-white px-4 py-2 rounded-pill mb-4">
                ✨ Special Offer
              </span>
              
              <h2 className="display-3 font-serif font-bold text-white mb-4">
                Beautiful Décor
                <br />
                <span className="text-cream">for Your Home</span>
              </h2>
              
              <p className="lead text-light mb-4 opacity-90">
                Transform your living space with our exclusive collection of handmade 
                home décor. Each piece tells a story and brings warmth to your home.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="d-flex flex-column flex-sm-row gap-3 mb-5"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="btn-primary-custom px-5 py-3 d-flex align-items-center gap-2"
                  >
                    Shop Collection
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
                    variant="outline-light" 
                    size="lg" 
                    className="px-5 py-3 border-2"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="d-flex flex-wrap gap-4 text-light"
              >
                <div className="text-center">
                  <motion.div 
                    className="h2 font-bold mb-0"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    1000+
                  </motion.div>
                  <small className="opacity-75">Happy Customers</small>
                </div>
                <div className="vr opacity-50"></div>
                <div className="text-center">
                  <motion.div 
                    className="h2 font-bold mb-0"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    200+
                  </motion.div>
                  <small className="opacity-75">Unique Products</small>
                </div>
                <div className="vr opacity-50"></div>
                <div className="text-center">
                  <motion.div 
                    className="h2 font-bold mb-0"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    50+
                  </motion.div>
                  <small className="opacity-75">Skilled Artisans</small>
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
                {features.map((feature, index) => (
                  <Col key={index} md={12}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="d-flex align-items-center gap-4 p-4 bg-white bg-opacity-10 backdrop-blur rounded-4 border border-light border-opacity-20"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="bg-sage-green rounded-circle p-3 flex-shrink-0"
                      >
                        {feature.icon}
                      </motion.div>
                      <div>
                        <h5 className="text-white font-bold mb-1">
                          {feature.title}
                        </h5>
                        <p className="text-light opacity-75 mb-0 small">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  </Col>
                ))}
              </Row>

              {/* Floating discount badge */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="position-absolute top-0 end-0 bg-dusty-rose text-white rounded-circle p-4 shadow-lg"
                style={{ transform: 'translate(20px, -20px)' }}
              >
                <div className="text-center">
                  <div className="h4 font-bold mb-0">25%</div>
                  <small className="small">OFF</small>
                </div>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallToAction;
