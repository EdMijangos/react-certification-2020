import React, { useState } from 'react';
import { Header } from '../../components';
import VideoSearchContext from '../../states/VideoSearchContext';

import './Layout.styles.css';

function Layout({ children }) {
  const [searchTerms, setSearchTerms] = useState('');
  const searchContextVal = { searchTerms, setSearchTerms };

  return (
    <div>
      <VideoSearchContext.Provider value={searchContextVal}>
        <Header />
        <main className="container">{children}</main>
      </VideoSearchContext.Provider>
    </div>
  );
}

export default Layout;
