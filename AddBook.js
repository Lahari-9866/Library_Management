import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Form, Button, Card } from 'react-bootstrap';

export default function AddBook() {
  const [book, setBook] = useState({ title: '', author: '', status: 'Available', issuedTo: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/books', book);
    navigate('/');
  };

  return (
    <Container className="mt-4">
      <Card className="shadow">
        <Card.Body>
          <h2 className="mb-3">➕ Add New Book</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control name="title" value={book.title} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control name="author" value={book.author} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select name="status" value={book.status} onChange={handleChange}>
                <option value="Available">Available</option>
                <option value="Issued">Issued</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Issued To</Form.Label>
              <Form.Control name="issuedTo" value={book.issuedTo} onChange={handleChange} />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Link to="/"><Button variant="secondary">⬅️ Back</Button></Link>
              <Button type="submit" variant="primary">📚 Add Book</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}