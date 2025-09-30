import React from 'react';
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { items, subtotal, updateQty, removeItem, clear } = useCart();

  return (
    <section className="section-padding">
      <Container>
        <h1 className="display-6 mb-4">Your Cart</h1>
        {items.length === 0 ? (
          <div className="text-center py-5">
            <p className="lead mb-4">Your cart is empty.</p>
            <Link className="btn btn-primary-custom" to="/">Continue Shopping</Link>
          </div>
        ) : (
          <Row>
            <Col lg={8} className="mb-4">
              <Table responsive bordered hover className="bg-white">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th style={{ width: 140 }}>Quantity</th>
                    <th style={{ width: 120 }}>Price</th>
                    <th style={{ width: 80 }}></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map(item => (
                    <tr key={item.id}>
                      <td>
                        <div className="d-flex align-items-center gap-3">
                          {item.image && (
                            <img src={item.image} alt={item.name} width={60} height={60} style={{objectFit:'cover'}} />
                          )}
                          <div>
                            <div className="fw-bold">{item.name}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          min={1}
                          value={item.qty}
                          onChange={(e) => updateQty(item.id, parseInt(e.target.value || '1', 10))}
                        />
                      </td>
                      <td>${(item.price * item.qty).toFixed(2)}</td>
                      <td>
                        <Button variant="outline-danger" size="sm" onClick={() => removeItem(item.id)}>Remove</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Button variant="outline-secondary" onClick={clear}>Clear Cart</Button>
            </Col>
            <Col lg={4}>
              <div className="p-4 bg-white shadow-sm rounded">
                <h5 className="mb-3">Order Summary</h5>
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <strong>${subtotal.toFixed(2)}</strong>
                </div>
                <div className="d-flex justify-content-between mb-4">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <Link className="btn btn-primary-custom w-100" to="/checkout">Proceed to Checkout</Link>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default CartPage;
