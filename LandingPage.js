import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const cards = [
    { title: '📖 View Books', path: '/books', bg: 'info' },
    { title: '➕ Add Book', path: '/add', bg: 'success' },
    { title: '📊 Dashboard', path: '/dashboard', bg: 'primary' },
    { title: '👤 Members', path: '/members', bg: 'warning' },
  ];

  return (
    <Container className="mt-5">
      <h1 className="text-center text-danger fw-bold mb-5">📚 Library Management System</h1>
      <Row className="g-4 justify-content-center">
        {cards.map((card, index) => (
          <Col key={index} xs={10} sm={6} md={4} lg={3}>
            <Link to={card.path} className="text-decoration-none">
              <Card className={`text-white bg-${card.bg} shadow rounded-4`} style={{ height: '150px' }}>
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <Card.Title className="fs-4">{card.title}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LandingPage;
