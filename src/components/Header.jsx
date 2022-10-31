import React from 'react';
import { Link } from 'gatsby';

import Logo from '../svg/logo-light.svg';

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
      <Link to="/">
        <Logo fill="#FEFEFE" className={logo} />
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
