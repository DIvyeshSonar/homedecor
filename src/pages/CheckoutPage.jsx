import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const CheckoutPage = () => {
  const { items, subtotal, clear } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock place order
    setOrderPlaced(true);
    clear();
  };

  if (orderPlaced) {
    return (
      <section className="section-padding">
        <Container>
          <Card className="p-5 text-center">
            <h3 className="mb-3">Thank you! 🎉</h3>
            <p>Your order has been placed successfully.</p>
          </Card>
        </Container>
      </section>
    );
  }

  return (
    <section className="section-padding">
      <Container>
        <Row>
          <Col lg={7} className="mb-4">
            <Card className="p-4">
              <h5 className="mb-3">Shipping Details</h5>
              <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col md={6}><Form.Control placeholder="First name" required /></Col>
                  <Col md={6}><Form.Control placeholder="Last name" required /></Col>
                  <Col md={12}><Form.Control placeholder="Address" required /></Col>
                  <Col md={6}><Form.Control placeholder="City" required /></Col>
                  <Col md={6}><Form.Control placeholder="Postal Code" required /></Col>
                  <Col md={6}><Form.Control type="email" placeholder="Email" required /></Col>
                  <Col md={6}><Form.Control type="tel" placeholder="Phone" required /></Col>
                  <Col md={12}><hr /></Col>
                  <Col md={12}><h6>Payment</h6></Col>
                  <Col md={12}><Form.Control placeholder="Card number" required /></Col>
                  <Col md={6}><Form.Control placeholder="MM/YY" required /></Col>
                  <Col md={6}><Form.Control placeholder="CVC" required /></Col>
                  <Col md={12} className="mt-2">
                    <Button type="submit" className="btn btn-primary-custom">Place Order</Button>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
          <Col lg={5}>
            <Card className="p-4">
              <h5 className="mb-3">Order Summary</h5>
              <div className="d-flex flex-column gap-3">
                {items.map(i => (
                  <div key={i.id} className="d-flex justify-content-between">
                    <span>{i.name} × {i.qty}</span>
                    <strong>${(i.qty * i.price).toFixed(2)}</strong>
                  </div>
                ))}
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <span>Subtotal</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>
              <div className="d-flex justify-content-between">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CheckoutPage;
