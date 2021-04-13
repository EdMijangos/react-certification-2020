import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from './styled';
import { ThumbnailAtom, TextAtom } from '../../atoms';

function ThumbnailCard({ id, link, thumbnail, subheader }) {
  return (
    <Link to={`/view/${link}`}>
      <Grid data-testid={id}>
        <ThumbnailAtom thumbnail={thumbnail} height="90px" />
        <TextAtom type="subheader">{subheader}</TextAtom>
      </Grid>
    </Link>
  );
}

export default ThumbnailCard;
