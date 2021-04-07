import React from 'react';
import { StyledThumbnailList } from './styled';
import { ThumbnailCard } from '../../molecules';

function ThumbnailCardList({ data }) {
  const items = data.map((item, index) => (
    <ThumbnailCard
      key={item.id.videoId ? item.id.videoId : item.id.channelId}
      id={`thumbnail-card-${index}`}
      link={item.id.videoId}
      thumbnail={item.snippet.thumbnails.default.url}
      subheader={item.snippet.title}
    />
  ));

  return <StyledThumbnailList>{items}</StyledThumbnailList>;
}

export default ThumbnailCardList;
