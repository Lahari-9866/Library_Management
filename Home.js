import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Container, Card, Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const res = await axios.get('http://localhost:5000/api/books');
    setBooks(res.data);
  };

  const deleteBook = async (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      await axios.delete(`http://localhost:5000/api/books/${id}`);
      fetchBooks();
    }
  };

  return (
    <Container className="mt-4">
      <Card className="shadow-lg p-4">
        <Row className="align-items-center mb-3">
          <Col><h2 className="text-primary fw-bold">📚 Library Book List</h2></Col>
          <Col className="text-end">
            <Link to="/add">
              <Button variant="success">➕ Add Book</Button>
            </Link>
          </Col>
        </Row>

        <Table striped bordered hover responsive className="align-middle text-center">
          <thead className="table-light">
            <tr>
              <th>S.No</th>
              <th>Title</th>
              <th>Author</th>
              <th>Status</th>
              <th>Issued To</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-muted py-4">No books available.</td>
              </tr>
            ) : (
              books.map((book, index) => (
                <tr key={book._id}>
                  <td>{index + 1}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>
                    <Badge bg={book.status === 'available' ? 'success' : 'warning'} className="text-capitalize">
                      {book.status}
                    </Badge>
                  </td>
                  <td>{book.issuedTo || '-'}</td>
                  <td>
                    <Link to={`/edit/${book._id}`}>
                      <Button variant="outline-primary" size="sm" className="me-2">✏️ Edit</Button>
                    </Link>
                    <Button variant="outline-danger" size="sm" onClick={() => deleteBook(book._id)}>🗑️ Delete</Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
}
