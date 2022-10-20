import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout pageTitle="404">
    <article>
      <h1>404 - Pagina niet gevonden</h1>
      <p>
        Sorry{' '}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{' '}
        Je hebt geprobeerd een pagina te bereiken die niet (meer) lijkt te bestaan. Gebruik de bovenstaande navigatie om naar een pagina te gaan of ga terug naar de <Link to="/">homepagina</Link>.
      </p>
    </article>
  </Layout>
);

export default NotFoundPage;
