import React from 'react';
import { Link } from 'gatsby';

import {
  header,
  contentContainer,
  link,
  logo,
} from './Header.module.css';

const Header = () => (
  <header className={header}>
    <section className={contentContainer}>
      <Link to="/" className={logo}>
        Ian.
      </Link>
      <nav>
        <Link to="/cv" className={link}>
          Resume
        </Link>
        <Link to="/contact" className={link}>
          Contact
        </Link>
      </nav>
    </section>
  </header>
);

export default Header;
