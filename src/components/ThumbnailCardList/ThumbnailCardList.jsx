import React from 'react';
import { StyledThumbnailList } from './styled';
import { ThumbnailCard } from '../../molecules';
import PropTypes from 'prop-types';

function ThumbnailCardList({ data, favorites }) {
  const items = data.map((item, index) => (
    <ThumbnailCard
      key={`thumbnail-card-${index}`}
      id={`thumbnail-card-${index}`}
      videoId={favorites? item.id : item.id.videoId}
      thumbnail={item.snippet.thumbnails.default.url}
      subheader={item.snippet.title}
      favorite={favorites}
    />
  ));

  return <StyledThumbnailList>{items}</StyledThumbnailList>;
}

ThumbnailCardList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  favorites: PropTypes.bool
}

ThumbnailCardList.defaultProps = {
  favorites: false
}

export default ThumbnailCardList;
