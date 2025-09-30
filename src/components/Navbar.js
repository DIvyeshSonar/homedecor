import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { FiShoppingCart, FiUser, FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Shop', to: '/#shop' },
    { name: 'About', to: '/#about' },
    { name: 'Contact', to: '/#contact' }
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed-top"
    >
      <BootstrapNavbar
        expand="lg"
        className={`py-3 transition-all duration-300 ${
          scrolled 
            ? 'bg-white shadow-lg backdrop-blur-md bg-opacity-95' 
            : 'bg-transparent'
        }`}
      >
        <Container>
          <BootstrapNavbar.Brand 
            as={Link}
            to="/"
            className="font-serif text-2xl font-bold text-warm-gray"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-warm-gray to-sage-green bg-clip-text text-transparent"
            >
              Artisan Home
            </motion.span>
          </BootstrapNavbar.Brand>

          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav">
            <FiMenu className="text-warm-gray" size={24} />
          </BootstrapNavbar.Toggle>

          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Nav.Link
                    as={Link}
                    to={item.to}
                    className="mx-3 text-warm-gray font-medium hover:text-sage-green transition-colors duration-300 position-relative"
                  >
                    {item.name}
                    <motion.div
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-sage-green"
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </Nav.Link>
                </motion.div>
              ))}
            </Nav>

            <Nav className="align-items-center">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Nav.Link as={Link} to="/login" className="mx-2">
                  <FiUser className="text-warm-gray hover:text-sage-green transition-colors" size={20} />
                </Nav.Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="position-relative"
              >
                <Nav.Link as={Link} to="/cart" className="mx-2">
                  <FiShoppingCart className="text-warm-gray hover:text-sage-green transition-colors" size={20} />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dusty-rose text-xs">
                    {totalItems}
                  </span>
                </Nav.Link>
              </motion.div>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </motion.div>
  );
};

export default Navbar;
