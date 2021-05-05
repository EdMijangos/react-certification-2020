import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from './styled';
import { ThumbnailAtom, TextAtom } from '../../atoms';
import PropTypes from 'prop-types';

function ThumbnailCard({ id, videoId, thumbnail, subheader, favorite }) {
  return (
    <Link to={favorite ? `/favorites/${videoId}` : `/view/${videoId}`}>
      <Grid data-testid={id}>
        <ThumbnailAtom thumbnail={thumbnail} height="90px" />
        <TextAtom type="subheader">{subheader}</TextAtom>
      </Grid>
    </Link>
  );
}

ThumbnailCard.propTypes = {
  id: PropTypes.string,
  videoId: PropTypes.string,
  thumbnail: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  favorite: PropTypes.bool
}

ThumbnailCard.defaultProps = {
  id: null,
  videoId: null,
  subheader: null,
  favorite: false,
}

export default ThumbnailCard;
