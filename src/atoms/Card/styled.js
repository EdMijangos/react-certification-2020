import styled from 'styled-components';

export const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.7);
  }
`;
