import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from './styled';
import { CardAtom, TextAtom, ThumbnailAtom } from '../../atoms';
import { PropTypes } from 'prop-types';

function VideoCard({ id, videoId, thumbnail, header, description, favorite }) {
  return (
    <Link to={favorite ? `/favorites/${videoId}` : `/view/${videoId}`}>
      <CardAtom id={id}>
        <Grid>
          <ThumbnailAtom thumbnail={thumbnail} height="120px" />
          <TextAtom type="header">{header}</TextAtom>
          <TextAtom>{description}</TextAtom>
        </Grid>
      </CardAtom>
    </Link>
  );
}

VideoCard.propTypes = {
  id: PropTypes.string,
  videoId: PropTypes.string,
  thumbnail: PropTypes.string.isRequired,
  header: PropTypes.string,
  description: PropTypes.string,
  favorite: PropTypes.bool
}

VideoCard.defaultProps = {
  id: null,
  videoId: null,
  header: null,
  description: null,
  favorite: false
}

export default VideoCard;
