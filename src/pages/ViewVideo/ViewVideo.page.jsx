import React from 'react';
import { useParams } from 'react-router';
import { VideoPlayer, ThumbnailCardList } from '../../components';
import { Grid } from './styled';

function ViewVideoPage() {
  const { videoId } = useParams();
  const allVideosData = JSON.parse(localStorage.getItem('videoData'));
  const videoData = allVideosData.items.filter((obj) => {
    return obj.id.videoId === videoId;
  });

  return (
    <Grid>
      <VideoPlayer data={videoData[0]} />
      <ThumbnailCardList data={allVideosData.items} />
    </Grid>
  );
}

export default ViewVideoPage;
