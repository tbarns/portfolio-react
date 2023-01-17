import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
    return (
      <ul className="nav nav-tabs">
     
        <button className="aboutBtn">
          <a
            href="#about"
            onClick={() => handlePageChange('about')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </button>
        <button className="portBtn">
          <a
            href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}
            // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </button>
        <button className="contactBtn">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </button>
        <button className="ResumeBtn">
          <a
            href="#Resume"
            onClick={() => handlePageChange('Resume')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Resume"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </button>
      </ul>
    );
  }
  export default Navigation;
