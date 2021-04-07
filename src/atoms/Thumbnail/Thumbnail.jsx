import React from 'react';
import { StyledThumbnail } from './styled';

function ThumbnailAtom({ thumbnail, height }) {
  return <StyledThumbnail data-testid="thumbnail" img={thumbnail} height={height} />;
}

export default ThumbnailAtom;
