import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditBook from './pages/EditBook';
import AddBook from './pages/AddBook';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
         <Route path="/" element={<LandingPage />} />
        <Route path="/books" element={<Home />} />
        <Route path="books/edit/:id" element={<EditBook />} />
        <Route path="/add" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
    
  );
}