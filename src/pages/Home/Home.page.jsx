import React, { useRef, useContext } from 'react';
import './Home.styles.css';

// Components
import { VideoCardList } from '../../components';
import { TextAtom } from '../../atoms';

// Hooks
import useYoutubeAPI from '../../utils/hooks/useYoutubeAPI';

// Context
import VideoSearchContext from '../../states/VideoSearchContext';

function HomePage() {
  const sectionRef = useRef(null);
  const { searchTerms } = useContext(VideoSearchContext);
  const videoData = useYoutubeAPI(searchTerms);

  return (
    <section className="homepage" ref={sectionRef}>
      <TextAtom type="title">Welcome!</TextAtom>
      {videoData ? <VideoCardList data={videoData.items} /> : <p>Loading...</p>}
    </section>
  );
}

export default HomePage;
