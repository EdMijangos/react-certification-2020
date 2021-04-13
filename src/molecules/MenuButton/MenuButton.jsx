import React from 'react';
import { ButtonAtom } from '../../atoms';
import { Bar } from './styled';

function MenuButton() {
  return (
    <ButtonAtom round>
      <Bar />
      <Bar />
      <Bar bottom />
    </ButtonAtom>
  );
}

export default MenuButton;
