import React from 'react';
import styled from 'styled-components';
import ButtonAtom from '../../atoms/Button';

const Bar = styled.span`
  height: 3px;
  width: 24px;
  background-color: white;
  display: inline-block;
  margin-bottom: ${(props) => (props.bottom ? '0' : '0.3rem')};
`;

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
