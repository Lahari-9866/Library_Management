import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Form, Button, Card } from 'react-bootstrap';

export default function EditBook() {
  const { id } = useParams();
  const [book, setBook] = useState({ title: '', author: '', status: 'Available', issuedTo: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/books')
      .then(res => {
        const found = res.data.find(b => b._id === id);
        if (found) setBook(found);
      });
  }, [id]);

  const handleChange = e => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/books/${id}`, book);
    navigate('/');
  };

  return (
    <Container className="mt-4">
      <Card className="shadow">
        <Card.Body>
          <h2 className="mb-3">✏️ Edit Book</h2>
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
              <Button type="submit" variant="success">💾 Update Book</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}