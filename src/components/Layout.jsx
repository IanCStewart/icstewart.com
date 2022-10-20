import React from 'react';
import PropTypes from 'prop-types';

import SEO from './SEO';

import { contentWrapper, contentContainer } from './Layout.module.css';

const propTypes = {
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Layout = (props) => {
  const {
    pageTitle,
    children,
  } = props;

  return (
    <main>
      <SEO title={pageTitle} />
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
