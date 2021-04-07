import styled from 'styled-components';

export const Bar = styled.span`
  height: 3px;
  width: 24px;
  background-color: white;
  display: inline-block;
  margin-bottom: ${({ bottom }) => (bottom ? '0' : '0.3rem')};
`;
