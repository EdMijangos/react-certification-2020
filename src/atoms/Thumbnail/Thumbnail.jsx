import React from 'react';
import { StyledThumbnail } from './styled';
import PropTypes from 'prop-types';

function ThumbnailAtom({ thumbnail, height }) {
  return <StyledThumbnail data-testid="thumbnail" img={thumbnail} height={height} />;
}

ThumbnailAtom.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
}

export default ThumbnailAtom;
