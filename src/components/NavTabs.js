import React from 'react';
import logo from './pages/images/brokenstar_logo.png'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header className="container">
      <section className="row">
        <figure id="site-logo" className="column col-sm-2 d-flex justify-content-between">
          <img id="logo" alt="logo" src={logo} />
          <h3>bryan.barnes</h3>
        </figure>
      </section>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#bio"
          onClick={() => handlePageChange('Bio')}
          // Check to see if the currentPage is `Bio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Bio' ? 'nav-link active' : 'nav-link'}
        >
          Bio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
    </header>
  );
}

export default NavTabs;
