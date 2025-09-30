import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock signup
    alert('Account created (mock)');
  };

  return (
    <section className="section-padding">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="p-4 shadow-sm">
              <h4 className="mb-3">Create Account</h4>
              <Form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <Button type="submit" className="btn btn-primary-custom w-100">Sign Up</Button>
              </Form>
              <div className="mt-3 text-center">
                <small>Already have an account? <Link to="/login">Log in</Link></small>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SignupPage;
