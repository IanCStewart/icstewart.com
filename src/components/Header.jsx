import React from 'react';
import { Link } from 'gatsby';

import {
  header,
  // transparentHeader,
  // scrolledHeader,
  contentContainer,
  // link,
  // nav,
  logo,
  // menuButton,
} from './Header.module.css';

const Header = () => (
  <header className={header}>
    <section className={contentContainer}>
      <Link to="/" className={logo}>
        Ian.
      </Link>
      <nav>
        <Link to="/cv">
          Resume
        </Link>
        <Link to="/contact">
          Contact
        </Link>
      </nav>
    </section>
  </header>
);

export default Header;
