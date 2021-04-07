import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 450px 1fr 20fr;
  grid-row-gap: 0.5rem;
`;

export const InnerGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 70% 1fr;
  grid-column-gap: 1rem;
`;
