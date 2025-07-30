// src/App.js
import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Profile />
      </main>
      <About />
      <Skills />
      <Projects />
      <ContactForm />
      <footer>
        <div className="container">
          <p className="footer-text">
            © 2024 Esakkiammal G. Built with React.js and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
