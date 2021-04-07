import React, { useRef, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

// Components
import { VideoCardList } from '../../components';

// Hooks
import useYoutubeAPI from '../../utils/hooks/useYoutubeAPI';

// Context
import VideoSearchContext from '../../states/VideoSearchContext';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();
  const { searchTerms } = useContext(VideoSearchContext);
  const videoData = useYoutubeAPI(searchTerms);

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  useEffect(() => {
    localStorage.setItem('videoData', JSON.stringify(videoData));
  }, [videoData]);

  return (
    <section className="homepage" ref={sectionRef}>
      <h1>Hello stranger!</h1>
      {authenticated ? (
        <>
          <h2>Good to have you back</h2>
          <span>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
            <span className="separator" />
            <Link to="/secret">show me something cool →</Link>
          </span>
        </>
      ) : (
        <Link to="/login">let me in →</Link>
      )}
      {videoData ? <VideoCardList data={videoData.items} /> : <p>Loading...</p>}
    </section>
  );
}

export default HomePage;
