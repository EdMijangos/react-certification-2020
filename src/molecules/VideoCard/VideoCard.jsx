import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from './styled';
import { CardAtom, TextAtom, ThumbnailAtom } from '../../atoms';

function VideoCard({ id, link, thumbnail, header, description }) {
  return (
    <Link to={`/view/${link}`}>
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
