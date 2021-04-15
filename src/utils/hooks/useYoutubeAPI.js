import { useCallback, useEffect, useState } from 'react';

function useYoutubeAPI(search, videoId) {
  const [clientInit, setClientInit] = useState(false);
  const [responseData, setResponseData] = useState();

  // Initialize the client
  // Timeout prevents "cannot find setApiKey of undefined" error
  useEffect(() => {
    setTimeout(() => {
      try {
        window.gapi.client.setApiKey(process.env.REACT_APP_GAPI_KEY);
        window.gapi.client.load(
          'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'
        );
        console.log('GAPI client initialized');
        // Timeout prevents "cannot find search of undefined"
        setTimeout(() => {
          setClientInit(true);
        }, 450);
      } catch (err) {
        console.error('Error loading GAPI client for API', err);
      }
    }, 100);
  }, []);

  const getList = useCallback(async () => {
    // Must not run when getting a single video details
    if (videoId) {
      return;
    }
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
  }, [clientInit, search, videoId]);

  useEffect(() => {
    getList();
  }, [getList]);

  const getVideo = useCallback(async () => {
    const videoData = {};
    // Must only run when getting a video's details
    if (!videoId) {
      return;
    }
    if (clientInit) {
      console.log('Getting video data');
      const vidResponse = await window.gapi.client.youtube.videos.list({
        part: 'id,snippet',
        id: videoId,
      });
      try {
        const [temp] = vidResponse.result.items;
        videoData.video = temp;
        console.log('Getting related videos');
        const relatedResponse = await window.gapi.client.youtube.search.list({
          part: 'id,snippet',
          relatedToVideoId: videoId,
          type: 'video',
          maxResults: 15,
        });
        try {
          videoData.related = relatedResponse.result.items.filter((obj) => {
            return obj.snippet;
          });
          setResponseData(videoData);
        } catch (err) {
          console.log(err);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }, [clientInit, videoId]);

  useEffect(() => {
    getVideo();
  }, [getVideo]);

  return responseData;
}

export default useYoutubeAPI;
