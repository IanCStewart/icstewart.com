import React, { ReactNode } from 'react';

import SEO from './SEO';
import Header from './Header';

import { contentWrapper, contentContainer } from './Layout.module.css';

type Props = {
  pageTitle?: string;
  children: ReactNode;
};

const Layout = (props: Props) => {
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

export default Layout;
