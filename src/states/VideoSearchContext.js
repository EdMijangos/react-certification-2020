import { createContext } from 'react';

const VideoSearchContext = createContext({
  searchTerms: '',
  setSearchTerms: () => {},
});

export default VideoSearchContext;
