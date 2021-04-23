import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from './styled';
import { CardAtom, TextAtom, ThumbnailAtom } from '../../atoms';

function VideoCard({ id, videoId, thumbnail, header, description }) {
  return (
    <Link to={`/view/${videoId}`}>
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

export default VideoCard;
