import styled from 'styled-components';
import Pulse from '../../assets/animations/pulse';

export const StyledButton = styled.button`
  cursor: pointer;
  width: fit-content;
  padding: ${({ padding }) => padding || '1rem'};
  border: 0;
  border-radius: ${({ round }) => (round ? '50%' : '5%')};
  color: ${({ theme }) => theme.text};
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
