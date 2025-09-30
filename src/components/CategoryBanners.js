import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CategoryBanners = () => {
  const categories = [
    {
      id: 1,
      title: 'Wall Décor',
      description: 'Beautiful handmade wall art and decorations',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: '🖼️',
      color: 'from-dusty-rose to-soft-pink',
      slug: 'wall-decor'
    },
    {
      id: 2,
      title: 'Handmade Lamps',
      description: 'Unique lighting solutions for every room',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: '💡',
      color: 'from-sage-green to-warm-gray',
      slug: 'lamps'
    },
    {
      id: 3,
      title: 'Ceramic Pots',
      description: 'Artisan-crafted pottery and planters',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: '🏺',
      color: 'from-warm-gray to-dusty-rose',
      slug: 'pots'
    },
    {
      id: 4,
      title: 'Wooden Crafts',
      description: 'Sustainable wooden home accessories',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: '🪵',
      color: 'from-soft-pink to-sage-green',
      slug: 'wooden'
    },
    {
      id: 5,
      title: 'Textiles & Macramé',
      description: 'Handwoven textiles, macramé hangings and rugs',
      image: 'https://images.unsplash.com/photo-1600486913747-55e0876a3fbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: '🧵',
      color: 'from-sage-green to-soft-pink',
      slug: 'wall-decor'
    },
    {
      id: 6,
      title: 'Candles & Aroma',
      description: 'Scented candles and holders for cozy vibes',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: '🕯️',
      color: 'from-dusty-rose to-warm-gray',
      slug: 'lamps'
    },
    {
      id: 7,
      title: 'Tableware',
      description: 'Handcrafted plates, bowls, trays and servers',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: '🍽️',
      color: 'from-warm-gray to-sage-green',
      slug: 'wooden'
    },
    {
      id: 8,
      title: 'Planters',
      description: 'Unique planters to green your space with style',
      image: 'https://images.unsplash.com/photo-1523419445073-c7f6a06385b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: '🌿',
      color: 'from-soft-pink to-dusty-rose',
      slug: 'pots'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
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
            Our Collections
          </span>
          <h2 className="display-4 font-serif font-bold text-warm-gray mb-3">
            Explore Our Categories
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Discover handcrafted treasures across our carefully curated categories, 
            each piece telling its own unique story.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row className="g-4">
            {categories.map((category, index) => (
              <Col key={category.id} lg={6} md={6}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-0 shadow-sm h-100 overflow-hidden card-hover">
                    <div className="position-relative">
                      <Card.Img
                        variant="top"
                        src={category.image}
                        alt={category.title}
                        className="object-fit-cover"
                        loading="lazy"
                        width={800}
                        height={250}
                        style={{ height: '250px' }}
                      />
                      <div className={`position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-br ${category.color} opacity-75`}></div>
                      
                      {/* Category Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="position-absolute top-3 end-3 bg-white rounded-circle p-3 shadow"
                      >
                        <span className="fs-4">{category.icon}</span>
                      </motion.div>
                    </div>

                    <Card.Body className="p-4">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div>
                          <Card.Title className="h4 font-serif font-bold text-warm-gray mb-2">
                            {category.title}
                          </Card.Title>
                          <Card.Text className="text-muted mb-0">
                            {category.description}
                          </Card.Text>
                        </div>
                      </div>

                      <motion.div whileHover={{ x: 5 }}>
                        <Link to={`/#shop?category=${category.slug}`} className="d-inline-flex align-items-center text-sage-green font-weight-medium text-decoration-none">
                          <span className="me-2">Explore Collection</span>
                          <FiArrowRight />
                        </Link>
                      </motion.div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Featured Category Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5"
        >
          <Card className="border-0 shadow-lg overflow-hidden">
            <Row className="g-0 align-items-center">
              <Col md={6}>
                <div 
                  className="h-100 position-relative"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '300px'
                  }}
                >
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-r from-warm-gray to-transparent opacity-75"></div>
                </div>
              </Col>
              <Col md={6}>
                <Card.Body className="p-5">
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <span className="badge bg-dusty-rose text-white px-3 py-2 rounded-pill mb-3">
                      Featured Collection
                    </span>
                    <h3 className="display-6 font-serif font-bold text-warm-gray mb-3">
                      Artisan's Choice
                    </h3>
                    <p className="text-muted mb-4">
                      Handpicked by our artisans, this exclusive collection features 
                      the finest handmade pieces that showcase exceptional craftsmanship 
                      and timeless design.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-primary-custom"
                    >
                      View Collection
                    </motion.button>
                  </motion.div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
};

export default CategoryBanners;
