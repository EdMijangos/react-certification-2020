import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { VideoPlayer, ThumbnailCardList } from '../../components';
import { GlobalContext } from '../../states/GlobalContext';
import { Grid } from './styled';

function ViewFavoritePage() {
  const { videoId } = useParams();
  const [state] = useContext(GlobalContext);
  const videoData = JSON.parse(localStorage.getItem('favoriteVideos'));
  const video = state.favoritesHistory.filter((item) => item.id === videoId);

  return (
    <div>
      {videoData.length > 0 ? (
        <Grid>
          <VideoPlayer data={video[0]} />
          <ThumbnailCardList data={videoData} favorites />
        </Grid>
      ) : (
        <p>You have no favorites</p>
      )}
    </div>
  );
}

export default ViewFavoritePage;
