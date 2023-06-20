import React, { useState } from 'react';
import "../Styles/Navbar.css";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='nav-container'>
      <div className='menu-icon' onClick={toggleMenu}>
        <div className={`menu-line ${isOpen ? 'open' : ''}`}></div>
        <div className={`menu-line ${isOpen ? 'open' : ''}`}></div>
        <div className={`menu-line ${isOpen ? 'open' : ''}`}></div>
      </div>
      <img className="logo" src="./Public/Logo.png" alt="Logo" />
      {isOpen && (
        <div className="menu-content">
          <div className="profile">
            <img className="profile-picture" src="./Public/profile-picture.jpg" alt="Profile" />
            <h3>About Me:</h3>
            <p className="description">My name is Nima. I graduated from Lighthouse Labs' Bootcamp in April 2023, where I honed my skills as a FullStack developer. Throughout the program, I gained expertise in a wide range of technologies, including React, CSS, HTML, Node.js, PostgreSQL, JavaScript, and Express. As a passionate junior developer, I am now eager to apply my knowledge and contribute to exciting projects in the field.</p>
            <h3>Website Overview:</h3>
            <p className="description">FitBit is a cutting-edge website designed to support Bootcamp attendees or similar programs in their fitness journeys. My primary goal is to help you avoid unnecessary weight gain while you focus on your intensive training program. With the power of the OpenAI API, I provide accurate and up-to-date nutrition information to guide you in making informed dietary choices.</p>
          </div>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/nima-mohamed/" target="_blank" rel="noopener noreferrer">
              <img src="./Public/linkedin-icon.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com/nima-nimbile" target="_blank" rel="noopener noreferrer">
              <img src="./Public/github-icon.png" alt="GitHub" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
