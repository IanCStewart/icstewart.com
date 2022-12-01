import React from 'react';
import { Link } from 'gatsby';

import LogoLight from '../svg/logo-light.svg';

import {
  header,
  contentContainer,
  link,
  logo,
} from './Header.module.css';

const Header = () => (
  <header className={header}>
    <section className={contentContainer}>
      <Link to="/">
        <LogoLight fill="#FEFEFE" className={logo} />
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
