import styled from 'styled-components';

export const Bar = styled.span`
  height: 4px;
  width: 30px;
  background-color: white;
  display: inline-block;
  margin-bottom: ${({ bottom }) => (bottom ? '0' : '0.3rem')};
`;

export const RelativePos = styled.div`
  position: relative;
`