import React from 'react';
import { StyledCardList } from './styled';
import { VideoCard } from '../../molecules';
import PropTypes from 'prop-types';

function VideoCardList({ data, favorites }) {
  const items = data.map((item, index) => (
    <VideoCard
      key={`video-card-${index}`}
      id={`video-card-${index}`}
      videoId={favorites ? item.id : item.id.videoId}
      thumbnail={item.snippet.thumbnails.medium.url}
      header={item.snippet.title}
      description={item.snippet.description}
      favorite={favorites}
    />
  ));

  return <StyledCardList>{items}</StyledCardList>;
}

VideoCardList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  favorites: PropTypes.bool
}

VideoCardList.defaultProps = {
  favorites: false
}

export default VideoCardList;
