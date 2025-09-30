import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding bg-light">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge bg-warm-gray text-white px-4 py-2 rounded-pill mb-3">Our Story</span>
              <h2 className="display-5 font-serif font-bold text-warm-gray mb-3">Crafted by Hand, Made with Heart</h2>
              <p className="lead text-muted">
                We collaborate with independent artisans to bring you unique décor pieces
                that celebrate tradition, authenticity, and craftsmanship. Every product has a
                story—from the hands that shaped it to the homes it enhances.
              </p>
              <div className="d-flex gap-4 mt-4">
                <div>
                  <div className="h3 text-sage-green mb-0">50+</div>
                  <small className="text-muted">Artisans Supported</small>
                </div>
                <div>
                  <div className="h3 text-sage-green mb-0">1000+</div>
                  <small className="text-muted">Items Delivered</small>
                </div>
                <div>
                  <div className="h3 text-sage-green mb-0">20+</div>
                  <small className="text-muted">Communities Impacted</small>
                </div>
              </div>
            </motion.div>
          </Col>
          <Col lg={6}>
            <Card className="border-0 shadow-sm overflow-hidden">
              <div className="ratio ratio-16x9">
                <img
                  src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Artisan at work"
                  className="w-100 h-100 object-fit-cover"
                  loading="lazy"
                />
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
