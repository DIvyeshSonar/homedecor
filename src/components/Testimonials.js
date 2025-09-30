import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Interior Designer',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'The handcrafted pieces I ordered exceeded my expectations. The attention to detail and quality is remarkable. My clients absolutely love the unique character these pieces bring to their homes.',
      product: 'Handwoven Wall Tapestry'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Homeowner',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'I\'ve been searching for authentic handmade décor for months. This store has the most beautiful collection I\'ve ever seen. The ceramic lamps I bought are absolutely stunning and well-crafted.',
      product: 'Ceramic Table Lamp'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Art Enthusiast',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Every piece tells a story and you can feel the love and craftsmanship that went into making it. The wooden serving tray I purchased has become a conversation starter at every dinner party.',
      product: 'Wooden Serving Tray'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Collector',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'As someone who appreciates fine craftsmanship, I can confidently say this is the best place to find authentic handmade home décor. The quality is unmatched and the customer service is exceptional.',
      product: 'Artisan Clay Pot Set'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="section-padding bg-light">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <span className="badge bg-sage-green text-white px-4 py-2 rounded-pill mb-3">
            Customer Reviews
          </span>
          <h2 className="display-4 font-serif font-bold text-warm-gray mb-3">
            What Our Customers Say
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about their handmade treasures.
          </p>
        </motion.div>

        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="position-relative">
              {/* Main Testimonial Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border-0 shadow-lg overflow-hidden">
                    <Card.Body className="p-5">
                      <Row className="align-items-center">
                        <Col md={4} className="text-center mb-4 mb-md-0">
                          <motion.div
                            initial={prefersReducedMotion ? undefined : { scale: 0 }}
                            animate={prefersReducedMotion ? undefined : { scale: 1 }}
                            transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 0.2 }}
                            className="position-relative d-inline-block"
                          >
                            <img
                              src={testimonials[currentIndex].avatar}
                              alt={testimonials[currentIndex].name}
                              className="rounded-circle shadow"
                              loading="lazy"
                              width={120}
                              height={120}
                              style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                            />
                            <motion.div
                              animate={prefersReducedMotion ? undefined : { rotate: 360 }}
                              transition={{ duration: prefersReducedMotion ? 0 : 20, repeat: prefersReducedMotion ? 0 : Infinity, ease: "linear" }}
                              className="position-absolute top-0 start-0 w-100 h-100 border border-3 border-sage-green rounded-circle opacity-25"
                            />
                          </motion.div>
                          
                          <div className="mt-3">
                            <h5 className="font-bold text-warm-gray mb-1">
                              {testimonials[currentIndex].name}
                            </h5>
                            <p className="text-muted small mb-2">
                              {testimonials[currentIndex].role}
                            </p>
                            <div className="d-flex justify-content-center mb-2">
                              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0 }}
                                  animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
                                  transition={{ duration: prefersReducedMotion ? 0 : 0.3, delay: 0.3 + i * 0.1 }}
                                >
                                  <FiStar 
                                    className="text-warning me-1" 
                                    fill="currentColor" 
                                    size={16}
                                  />
                                </motion.div>
                              ))}
                            </div>
                            <small className="text-sage-green font-weight-medium">
                              Purchased: {testimonials[currentIndex].product}
                            </small>
                          </div>
                        </Col>
                        <Col md={8}>
                          <motion.div
                            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            animate={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: 0.4 }}
                            className="position-relative"
                          >
                            <FaQuoteRight 
                              className="text-sage-green opacity-25 position-absolute"
                              size={60}
                              style={{ top: '-20px', left: '-10px' }}
                            />
                            <blockquote className="h5 text-warm-gray font-serif lh-base mb-0 ps-4">
                              {testimonials[currentIndex].text}
                            </blockquote>
                          </motion.div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="btn btn-primary-custom rounded-circle position-absolute top-50 start-0 translate-middle-y shadow"
                style={{ left: '-25px', width: '50px', height: '50px' }}
              >
                <FiChevronLeft />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="btn btn-primary-custom rounded-circle position-absolute top-50 end-0 translate-middle-y shadow"
                style={{ right: '-25px', width: '50px', height: '50px' }}
              >
                <FiChevronRight />
              </motion.button>
            </div>

            {/* Dots Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="d-flex justify-content-center gap-2 mt-4"
            >
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => goToSlide(index)}
                  className={`rounded-circle border-0 transition-all ${
                    index === currentIndex 
                      ? 'bg-sage-green' 
                      : 'bg-secondary bg-opacity-25'
                  }`}
                  style={{ width: '12px', height: '12px' }}
                />
              ))}
            </motion.div>
          </Col>
        </Row>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-5"
        >
          <Row className="text-center">
            <Col md={3} sm={6} className="mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="h2 font-bold text-sage-green mb-2"
                >
                  4.9★
                </motion.div>
                <p className="text-muted mb-0">Average Rating</p>
              </motion.div>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="h2 font-bold text-sage-green mb-2"
                >
                  1,200+
                </motion.div>
                <p className="text-muted mb-0">Happy Customers</p>
              </motion.div>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="h2 font-bold text-sage-green mb-2"
                >
                  98%
                </motion.div>
                <p className="text-muted mb-0">Satisfaction Rate</p>
              </motion.div>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="h2 font-bold text-sage-green mb-2"
                >
                  5 Years
                </motion.div>
                <p className="text-muted mb-0">In Business</p>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Testimonials;
