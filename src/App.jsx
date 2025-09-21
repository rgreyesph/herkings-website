import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import GalleryPage from './pages/GalleryPage';
import AdminPage from './pages/AdminPage'; // <-- 1. Add this import
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/admin" element={<AdminPage />} /> {/* <-- 2. Add this new route */}
        </Routes>
      </main>
    </div>
  );
}

export default App;