import React from 'react';
import { Grid, InnerGrid } from './styled';
import { ButtonAtom, TextAtom } from '../../atoms';

function VideoPlayer({ data }) {
  return (
    <Grid>
      <iframe
        width="100%"
        height="450px"
        src={`https://www.youtube.com/embed/${data.id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <InnerGrid>
        <TextAtom type="header">{data.snippet.title}</TextAtom>
        <ButtonAtom>AGREGAR A FAVORITOS</ButtonAtom>
      </InnerGrid>
      <TextAtom>{data.snippet.description}</TextAtom>
    </Grid>
  );
}

export default VideoPlayer;
