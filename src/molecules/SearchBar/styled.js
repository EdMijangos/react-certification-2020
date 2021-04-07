import styled from 'styled-components';
import Pulse from '../../assets/animations/pulse';

export const StyledIcon = styled.img`
  position: relative;
  top: 0.3rem;
  left: 2rem;
  width: 24px;
  height: 24px;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
  &:focus:not(:active) {
    animation: 1s ${Pulse} linear;
  }
`;
