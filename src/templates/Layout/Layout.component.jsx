import React from 'react';
import { Header } from '../../components';
import { ContextWrapper } from '../../states/GlobalContext';
import { PropTypes } from 'prop-types';

import './Layout.styles.css';

function Layout({ children }) {

  return (
    <div>
      <ContextWrapper>
          <Header />
          <main className="container">{children}</main>
      </ContextWrapper>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
