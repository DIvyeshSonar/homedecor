import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Container, Row, Col, Card, Button, Badge, Modal } from 'react-bootstrap';
import { FiShoppingCart, FiHeart, FiEye, FiStar } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useLocation } from 'react-router-dom';

const ProductGrid = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [favorites, setFavorites] = useState(new Set());
  const { addItem } = useCart();
  const location = useLocation();

  // Quick View modal state
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Handwoven Wall Tapestry',
      price: 89.99,
      originalPrice: 120.00,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'wall-decor',
      rating: 4.8,
      reviews: 24,
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: 'Ceramic Table Lamp',
      price: 65.00,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'lamps',
      rating: 4.9,
      reviews: 18,
      isNew: false,
      isSale: false
    },
    {
      id: 3,
      name: 'Artisan Clay Pot Set',
      price: 45.00,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'pots',
      rating: 4.7,
      reviews: 32,
      isNew: true,
      isSale: false
    },
    {
      id: 4,
      name: 'Wooden Serving Tray',
      price: 35.00,
      originalPrice: 50.00,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'wooden',
      rating: 4.6,
      reviews: 15,
      isNew: false,
      isSale: true
    },
    {
      id: 5,
      name: 'Macrame Plant Hanger',
      price: 28.00,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'wall-decor',
      rating: 4.9,
      reviews: 41,
      isNew: true,
      isSale: false
    },
    {
      id: 6,
      name: 'Handmade Candle Holders',
      price: 42.00,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'lamps',
      rating: 4.8,
      reviews: 27,
      isNew: false,
      isSale: false
    }
  ];

  const filters = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'wall-decor', name: 'Wall Décor', count: products.filter(p => p.category === 'wall-decor').length },
    { id: 'lamps', name: 'Lamps', count: products.filter(p => p.category === 'lamps').length },
    { id: 'pots', name: 'Pots', count: products.filter(p => p.category === 'pots').length },
    { id: 'wooden', name: 'Wooden', count: products.filter(p => p.category === 'wooden').length }
  ];

  const filteredProducts = useMemo(() => (
    activeFilter === 'all' ? products : products.filter(product => product.category === activeFilter)
  ), [activeFilter]);

  const prefersReducedMotion = useReducedMotion();

  // Quick-response category filter from URL, e.g., /#shop?category=lamps
  useEffect(() => {
    const params = new URLSearchParams(location.hash.split('?')[1] || '');
    const cat = params.get('category');
    if (cat && filters.some(f => f.id === cat)) {
      setActiveFilter(cat);
    }
  }, [location.hash]);

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const openQuickView = (product) => {
    setQuickViewProduct(product);
    setQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setQuickViewOpen(false);
    // small delay to avoid stale image flash when reopening
    setTimeout(() => setQuickViewProduct(null), 200);
  };

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
    hidden: { y: 50, opacity: 0 },
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
    <section id="shop" className="section-padding">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <span className="badge bg-dusty-rose text-white px-4 py-2 rounded-pill mb-3">
            Our Products
          </span>
          <h2 className="display-4 font-serif font-bold text-warm-gray mb-3">
            Handcrafted with Love
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Each piece in our collection is carefully handmade by skilled artisans, 
            bringing warmth and character to your home.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="d-flex flex-wrap justify-content-center gap-3 mb-5"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`btn rounded-pill px-4 py-2 border-2 transition-all ${
                activeFilter === filter.id
                  ? 'btn-primary-custom'
                  : 'btn-outline-secondary'
              }`}
            >
              {filter.name} ({filter.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate={prefersReducedMotion ? undefined : 'visible'}
            exit={prefersReducedMotion ? undefined : 'hidden'}
          >
            <Row className="g-4">
              {filteredProducts.map((product) => (
                <Col key={product.id} lg={4} md={6}>
                  <motion.div
                    variants={itemVariants}
                    layout
                    whileHover={prefersReducedMotion ? undefined : { y: -10 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                  >
                    <Card className="border-0 shadow-sm h-100 overflow-hidden card-hover">
                      <div className="position-relative overflow-hidden product-card">
                        <Card.Img
                          variant="top"
                          src={product.image}
                          alt={product.name}
                          className="object-fit-cover transition-transform duration-300"
                          loading="lazy"
                          width={600}
                          height={250}
                          style={{ height: '250px' }}
                        />
                        
                        {/* Badges */}
                        <div className="position-absolute top-3 start-3 d-flex flex-column gap-2">
                          {product.isNew && (
                            <Badge bg="sage-green" className="px-2 py-1">New</Badge>
                          )}
                          {product.isSale && (
                            <Badge bg="dusty-rose" className="px-2 py-1">Sale</Badge>
                          )}
                        </div>

                        {/* Favorite Button */}
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => toggleFavorite(product.id)}
                          className={`position-absolute top-3 end-3 btn btn-sm rounded-circle border-0 ${
                            favorites.has(product.id) 
                              ? 'btn-danger' 
                              : 'btn-light'
                          }`}
                        >
                          <FiHeart 
                            className={favorites.has(product.id) ? 'text-white' : 'text-muted'} 
                            fill={favorites.has(product.id) ? 'currentColor' : 'none'}
                          />
                        </motion.button>

                        {/* Hover Overlay */}
                        <div
                          className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center overlay-fade"
                        >
                          <div className="d-flex gap-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="btn btn-light btn-sm rounded-circle"
                              aria-label={`Quick view ${product.name}`}
                              onClick={() => openQuickView(product)}
                            >
                              <FiEye />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="btn btn-primary-custom btn-sm rounded-circle"
                              aria-label={`Add ${product.name} to cart`}
                              onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image })}
                            >
                              <FiShoppingCart />
                            </motion.button>
                          </div>
                        </div>
                      </div>

                      <Card.Body className="p-4">
                        <div className="d-flex align-items-center mb-2">
                          <div className="d-flex align-items-center me-auto">
                            {[...Array(5)].map((_, i) => (
                              <FiStar
                                key={i}
                                className={`me-1 ${
                                  i < Math.floor(product.rating) 
                                    ? 'text-warning' 
                                    : 'text-muted'
                                }`}
                                fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                                size={14}
                              />
                            ))}
                            <small className="text-muted ms-1">
                              {product.rating} ({product.reviews})
                            </small>
                          </div>
                        </div>

                        <Card.Title className="h5 font-serif font-bold text-warm-gray mb-2">
                          {product.name}
                        </Card.Title>

                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-2">
                            <span className="h5 font-bold text-sage-green mb-0">
                              ${product.price}
                            </span>
                            {product.originalPrice && (
                              <span className="text-muted text-decoration-line-through small">
                                ${product.originalPrice}
                              </span>
                            )}
                          </div>

                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-primary-custom btn-sm"
                            onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image })}
                          >
                            Add to Cart
                          </motion.button>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </AnimatePresence>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-5"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-outline-secondary btn-lg px-5"
          >
            Load More Products
          </motion.button>
        </motion.div>
      </Container>
      {/* Quick View Modal */}
      <QuickViewModal
        show={quickViewOpen}
        onHide={closeQuickView}
        product={quickViewProduct}
        onAdd={(p) => addItem({ id: p.id, name: p.name, price: p.price, image: p.image })}
      />
    </section>
  );
};

// Quick View Modal component within same file for simplicity
const QuickViewModal = ({ show, onHide, product, onAdd }) => {
  if (!product) return null;
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={product.image}
          alt={product.name}
          className="img-fluid rounded mb-3"
          loading="lazy"
        />
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <div className="h5 mb-0 text-sage-green">${product.price}</div>
          </div>
          <Button
            className="btn btn-primary-custom"
            onClick={() => { onAdd(product); onHide(); }}
          >
            <FiShoppingCart className="me-2" /> Add to Cart
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};


export default ProductGrid;
