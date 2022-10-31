import React from 'react';
import PropTypes from 'prop-types';

import SEO from './SEO';
import Header from './Header';

import { contentWrapper, contentContainer } from './Layout.module.css';

const propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const Layout = (props) => {
  const {
    pageTitle = undefined,
    children,
  } = props;

  return (
    <main>
      <SEO title={pageTitle} />
      <Header />
      <section className={contentWrapper}>
        <article className={contentContainer}>
          {children}
        </article>
      </section>
    </main>
  );
};

Layout.propTypes = propTypes;

export default Layout;
