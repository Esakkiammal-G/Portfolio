import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu
  const [isMobile, setIsMobile] = useState(false); // State to manage if it's mobile view
  const [isScrolled, setIsScrolled] = useState(false); // State to manage the scroll effect

  // Function to check window size and update mobile view
  const updateMobileView = () => {
    setIsMobile(window.innerWidth <= 768); // Set to true if screen width is <= 768px (mobile)
  };

  // Function to handle scroll and update header style
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50); // Set to true if scrolled more than 50px
  };

  useEffect(() => {
    updateMobileView(); // Check on initial load
    window.addEventListener('resize', updateMobileView); // Add event listener to window resize
    window.addEventListener('scroll', handleScroll); // Add scroll event listener

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('resize', updateMobileView);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState); // Toggle the menu state
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <h1>Esakkiammal G</h1>

        {isMobile && (
          <button
            className="toggle-button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? '✖' : '☰'}
          </button>
        )}

        <nav className={`navbar ${isMobile && isOpen ? 'active' : ''}`}>
          <a href="#profile" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
