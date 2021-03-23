import React from 'react';
import styled, { keyframes } from 'styled-components';

const Pulse = keyframes`
    0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);
    }

    50% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }

    100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
`;

const StyledButton = styled.button`
  cursor: pointer;
  width: fit-content;
  padding: ${(props) => (props.padding ? props.padding : '1rem')};
  border: 0;
  border-radius: ${(props) => (props.round ? '50%' : '5%')};
  display: inline-flex;
  flex-direction: column;
  background-color: transparent;
  transition: background-color 300ms ease-in;
  &:focus {
    outline: 0;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  &:focus:not(:active) {
    animation: 1s ${Pulse} linear;
  }
`;
function ButtonAtom(props) {
  return (
    <StyledButton round={props.round} padding={props.padding} className={props.className}>
      {props.children}
    </StyledButton>
  );
}

export default ButtonAtom;
