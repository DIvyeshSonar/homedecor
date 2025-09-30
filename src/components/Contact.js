import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <Container>
        <Row className="g-4">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="display-6 font-serif font-bold text-warm-gray mb-3">Get in Touch</h2>
              <p className="text-muted mb-4">Questions about our products or your order? Send us a message and we’ll get back to you within 24 hours.</p>
              <Card className="p-4 shadow-sm border-0">
                <Form onSubmit={(e) => e.preventDefault()}>
                  <Row className="g-3">
                    <Col md={6}><Form.Control placeholder="Your name" required /></Col>
                    <Col md={6}><Form.Control type="email" placeholder="Your email" required /></Col>
                    <Col md={12}><Form.Control as="textarea" rows={5} placeholder="How can we help?" required /></Col>
                    <Col md={12}><Button type="submit" className="btn btn-primary-custom">Send Message</Button></Col>
                  </Row>
                </Form>
              </Card>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-100"
            >
              <Card className="p-4 shadow-sm border-0 h-100">
                <h5 className="mb-3">Contact Details</h5>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <FiMail className="text-sage-green" />
                  <span>support@artisanhome.example</span>
                </div>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <FiPhone className="text-sage-green" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="d-flex align-items-start gap-3">
                  <FiMapPin className="text-sage-green mt-1" />
                  <span>123 Craft Lane, Studio District, CA 94000</span>
                </div>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
