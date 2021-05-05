import React from 'react';
import { VideoCardList } from '../../components';
import { TextAtom } from '../../atoms';

function FavoritesPage() {
  const videoData = JSON.parse(localStorage.getItem('favoriteVideos'));

  return (
    <>
      <TextAtom type="title">Your favorites</TextAtom>
      {videoData.length > 0 ? (
        <VideoCardList data={videoData} favorites />
      ) : (
        <p>You have no favorites</p>
      )}
    </>
  );
}

export default FavoritesPage;
