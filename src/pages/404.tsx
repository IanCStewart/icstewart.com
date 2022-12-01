import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout pageTitle="404">
    <article>
      <h1>404 - Page not Found</h1>
      <p>
        Sorry
        {' '}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>
        {' '}
        , You tried to reach a page that doesn&apos;t seem to exist. Navigate to a different page or go back to the {/* eslint-disable-line max-len, react/jsx-one-expression-per-line */}
        {' '}
        <Link to="/">home page</Link>
        .
      </p>
    </article>
  </Layout>
);

export default NotFoundPage;
