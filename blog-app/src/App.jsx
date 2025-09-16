import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
// Navbar with Links for navigation
function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <h2>Contact Page</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
        <label>Name:</label><br />
        <input name="name" value={formData.name} onChange={handleChange} required /><br />

        <label>Email:</label><br />
        <input name="email" type="email" value={formData.email} onChange={handleChange} required /><br />

        <label>Message:</label><br />
        <textarea name="message" value={formData.message} onChange={handleChange} required /><br />

        <button type="submit" style={{ marginTop: '10px' }}>Send</button>
      </form>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);

export default App