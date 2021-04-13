import React from 'react';
import { StyledCardList } from './styled';
import { VideoCard } from '../../molecules';

function VideoCardList({ data }) {
  const items = data.map((item, index) => (
    <VideoCard
      key={item.id.videoId ? item.id.videoId : item.id.channelId}
      id={`video-card-${index}`}
      link={item.id.videoId}
      thumbnail={item.snippet.thumbnails.medium.url}
      header={item.snippet.title}
      description={item.snippet.description}
    />
  ));

  return <StyledCardList>{items}</StyledCardList>;
}

export default VideoCardList;
