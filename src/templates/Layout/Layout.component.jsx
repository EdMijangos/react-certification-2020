import React, { useState } from 'react';
import { Header } from '../../components';
import VideoSearchContext from '../../states/VideoSearchContext';
import { ThemeWrapper } from '../../states/ThemeContext';

import './Layout.styles.css';

function Layout({ children }) {
  const [searchTerms, setSearchTerms] = useState('');
  const searchContextVal = { searchTerms, setSearchTerms };

  return (
    <div>
      <ThemeWrapper>
        <VideoSearchContext.Provider value={searchContextVal}>
          <Header />
          <main className="container">{children}</main>
        </VideoSearchContext.Provider>
      </ThemeWrapper>
    </div>
  );
}

export default Layout;
