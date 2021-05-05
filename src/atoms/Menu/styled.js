import styled from 'styled-components';
import { fadeIn, fadeOut } from '../../assets/animations/fadeInOut';

export const StyledMenu = styled.div`
  width: 150px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  top: ${({ siblingHeight }) => siblingHeight};
  left: ${({ alignRight }) => (alignRight ? '-100%' : '0')};
  animation: 0.2s ${({ hide }) => (hide ? fadeOut : fadeIn)} ease-in;
  visibility: ${({ hide }) => (hide ? 'hidden' : 'visible')};
  transition: 0.2s;
`;

export const OptionBg = styled.div`
  display: block;
  cursor: pointer;
  padding: 0.4rem 1rem;
  border-radius: 15px;
  &:hover {
    background-color: ${({ theme }) => theme.headerBackground};
  }
`;
