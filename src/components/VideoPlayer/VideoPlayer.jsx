import React, { useContext, useState } from 'react';
import { Grid, InnerGrid } from './styled';
import { ButtonAtom, TextAtom } from '../../atoms';
import PropTypes from 'prop-types';
import { GlobalContext } from '../../states/GlobalContext';

function VideoPlayer({ data }) {
  const [state, dispatch] = useContext(GlobalContext);
  const [saved, setSaved] = useState(false);

  const index = state.favorites.findIndex(item => item.id === data.id);

  function addFavorite() {
    dispatch({ type: 'addFavorite', payload: data })
    setSaved(true)
  }

  function removeFavorite() {
    dispatch({ type: 'deleteFavorite', payload: index })
    setSaved(false)
  }

  let button;
  if (index >= 0 || saved) {
    button = <ButtonAtom click={removeFavorite}>REMOVER DE FAVORITOS</ButtonAtom>
  } else {
    button = <ButtonAtom click={addFavorite}>AGREGAR A FAVORITOS</ButtonAtom>
  }

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
        {state.session && button}
      </InnerGrid>
      <TextAtom>{data.snippet.description}</TextAtom>
    </Grid>
  );
}

VideoPlayer.propTypes = {
  data: PropTypes.object.isRequired
}

export default VideoPlayer;
