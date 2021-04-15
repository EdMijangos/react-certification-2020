import React from 'react';
import { useParams } from 'react-router';
import { VideoPlayer, ThumbnailCardList } from '../../components';
import useYoutubeAPI from '../../utils/hooks/useYoutubeAPI';
import { Grid } from './styled';

function ViewVideoPage() {
  const { videoId } = useParams();
  const videoData = useYoutubeAPI(null, videoId);

  return (
    <div>
      {videoData ? (
        <Grid>
          <VideoPlayer data={videoData.video} />
          <ThumbnailCardList data={videoData.related} />
        </Grid>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ViewVideoPage;
