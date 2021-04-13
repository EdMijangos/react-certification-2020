import { useCallback, useEffect, useState } from 'react';

function useYoutubeAPI(search) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [clientInit, setClientInit] = useState(false);
  const [responseData, setResponseData] = useState();

  // Dynamically put the script to load GAPI and listen to when it's loaded
  useEffect(() => {
    if (document.getElementById('gapi-script')) {
      return setScriptLoaded(true);
    }
    const scriptTag = document.createElement('script');
    scriptTag.addEventListener('load', () => setScriptLoaded(true));
    scriptTag.src = 'https://apis.google.com/js/client.js';
    scriptTag.id = 'gapi-script';
    document.body.appendChild(scriptTag);
  }, []);

  // Initialize the client once GAPI is loaded.
  // Timeout prevents "cannot find setApiKey of undefined" error
  useEffect(() => {
    if (scriptLoaded) {
      setTimeout(() => {
        try {
          window.gapi.client.setApiKey(process.env.REACT_APP_GAPI_KEY);
          window.gapi.client.load(
            'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'
          );
          console.log('GAPI client loaded for API');
          // Timeout prevents "cannot find search of undefined"
          setTimeout(() => {
            setClientInit(true);
          }, 450);
        } catch (err) {
          console.error('Error loading GAPI client for API', err);
        }
      }, 100);
    }
  }, [scriptLoaded]);

  const getList = useCallback(async () => {
    if (clientInit) {
      const response = await window.gapi.client.youtube.search.list({
        part: 'id,snippet',
        q: search,
        type: 'video',
        maxResults: 15,
      });
      try {
        setResponseData(response.result);
      } catch (err) {
        console.log(err);
      }
    }
  }, [clientInit, search]);

  useEffect(() => {
    getList();
  }, [getList]);

  return responseData;
}

export default useYoutubeAPI;
