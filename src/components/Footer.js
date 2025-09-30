import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FiFacebook, 
  FiInstagram, 
  FiTwitter, 
  FiYoutube,
  FiMail,
  FiPhone,
  FiMapPin,
  FiHeart,
  FiArrowUp
} from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    shop: [
      { name: 'Wall Décor', href: '#wall-decor' },
      { name: 'Lamps & Lighting', href: '#lamps' },
      { name: 'Ceramic Pots', href: '#pots' },
      { name: 'Wooden Crafts', href: '#wooden' },
      { name: 'New Arrivals', href: '#new' },
      { name: 'Sale Items', href: '#sale' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Artisans', href: '#artisans' },
      { name: 'Sustainability', href: '#sustainability' },
      { name: 'Press', href: '#press' },
      { name: 'Careers', href: '#careers' },
      { name: 'Blog', href: '#blog' }
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'Shipping Info', href: '#shipping' },
      { name: 'Returns', href: '#returns' },
      { name: 'Size Guide', href: '#size-guide' },
      { name: 'Care Instructions', href: '#care' },
      { name: 'FAQ', href: '#faq' }
    ]
  };

  const socialLinks = [
    { icon: <FiFacebook />, href: '#facebook', name: 'Facebook' },
    { icon: <FiInstagram />, href: '#instagram', name: 'Instagram' },
    { icon: <FiTwitter />, href: '#twitter', name: 'Twitter' },
    { icon: <FiYoutube />, href: '#youtube', name: 'YouTube' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-warm-gray text-white position-relative overflow-hidden">
      {/* Background Pattern */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="position-absolute top-0 start-0"
          style={{ fontSize: '400px', transform: 'translate(-100px, -100px)' }}
        >
          🏺
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="position-absolute bottom-0 end-0"
          style={{ fontSize: '300px', transform: 'translate(100px, 100px)' }}
        >
          🕯️
        </motion.div>
      </div>

      <Container className="position-relative z-index-2">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-5"
        >
          <Row className="g-5">
            {/* Brand Section */}
            <Col lg={4} md={6}>
              <motion.div variants={itemVariants}>
                <motion.h3 
                  className="font-serif font-bold mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="bg-gradient-to-r from-cream to-soft-pink bg-clip-text text-transparent">
                    Artisan Home
                  </span>
                </motion.h3>
                
                <p className="text-light opacity-75 mb-4 lh-lg">
                  We believe every home deserves unique, handcrafted pieces that tell a story. 
                  Our artisans pour their heart and soul into creating beautiful décor that 
                  transforms your space into a warm, welcoming haven.
                </p>

                {/* Contact Info */}
                <div className="mb-4">
                  <motion.div 
                    className="d-flex align-items-center gap-3 mb-2"
                    whileHover={{ x: 5 }}
                  >
                    <FiMapPin className="text-sage-green flex-shrink-0" />
                    <span className="small">123 Artisan Street, Craft City, CC 12345</span>
                  </motion.div>
                  <motion.div 
                    className="d-flex align-items-center gap-3 mb-2"
                    whileHover={{ x: 5 }}
                  >
                    <FiPhone className="text-sage-green flex-shrink-0" />
                    <span className="small">+1 (555) 123-4567</span>
                  </motion.div>
                  <motion.div 
                    className="d-flex align-items-center gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <FiMail className="text-sage-green flex-shrink-0" />
                    <span className="small">hello@artisanhome.com</span>
                  </motion.div>
                </div>

                {/* Social Links */}
                <div className="d-flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-sage-green rounded-circle p-2 text-white text-decoration-none d-flex align-items-center justify-content-center"
                      style={{ width: '40px', height: '40px' }}
                      title={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </Col>

            {/* Shop Links */}
            <Col lg={2} md={6}>
              <motion.div variants={itemVariants}>
                <h5 className="font-bold mb-4 text-cream">Shop</h5>
                <ul className="list-unstyled">
                  {footerLinks.shop.map((link, index) => (
                    <li key={link.name} className="mb-2">
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5, color: '#9CAF88' }}
                        className="text-light opacity-75 text-decoration-none small"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Col>

            {/* Company Links */}
            <Col lg={2} md={6}>
              <motion.div variants={itemVariants}>
                <h5 className="font-bold mb-4 text-cream">Company</h5>
                <ul className="list-unstyled">
                  {footerLinks.company.map((link, index) => (
                    <li key={link.name} className="mb-2">
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5, color: '#9CAF88' }}
                        className="text-light opacity-75 text-decoration-none small"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Col>

            {/* Support Links */}
            <Col lg={2} md={6}>
              <motion.div variants={itemVariants}>
                <h5 className="font-bold mb-4 text-cream">Support</h5>
                <ul className="list-unstyled">
                  {footerLinks.support.map((link, index) => (
                    <li key={link.name} className="mb-2">
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5, color: '#9CAF88' }}
                        className="text-light opacity-75 text-decoration-none small"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Col>

            {/* Newsletter Signup */}
            <Col lg={2} md={6}>
              <motion.div variants={itemVariants}>
                <h5 className="font-bold mb-4 text-cream">Stay Updated</h5>
                <p className="small text-light opacity-75 mb-3">
                  Get the latest updates on new collections and exclusive offers.
                </p>
                <motion.a
                  href="#newsletter"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-outline-light btn-sm rounded-pill px-3 text-decoration-none"
                >
                  Subscribe
                </motion.a>
              </motion.div>
            </Col>
          </Row>
        </motion.div>

        {/* Divider */}
        <motion.hr 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-light opacity-25 my-4"
        />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-4"
        >
          <Row className="align-items-center">
            <Col md={6}>
              <div className="d-flex align-items-center gap-2 text-light opacity-75 small">
                <span>© 2024 Artisan Home. Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FiHeart className="text-dusty-rose" fill="currentColor" />
                </motion.div>
                <span>by passionate artisans.</span>
              </div>
            </Col>
            <Col md={6} className="text-md-end mt-3 mt-md-0">
              <div className="d-flex flex-wrap justify-content-md-end gap-4">
                <motion.a
                  href="#privacy"
                  whileHover={{ color: '#9CAF88' }}
                  className="text-light opacity-75 text-decoration-none small"
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#terms"
                  whileHover={{ color: '#9CAF88' }}
                  className="text-light opacity-75 text-decoration-none small"
                >
                  Terms of Service
                </motion.a>
                <motion.a
                  href="#cookies"
                  whileHover={{ color: '#9CAF88' }}
                  className="text-light opacity-75 text-decoration-none small"
                >
                  Cookie Policy
                </motion.a>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        className="position-fixed bottom-4 end-4 btn btn-sage-green rounded-circle shadow-lg border-0 z-index-3"
        style={{ width: '50px', height: '50px' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <FiArrowUp className="text-white" />
      </motion.button>
    </footer>
  );
};

export default Footer;
