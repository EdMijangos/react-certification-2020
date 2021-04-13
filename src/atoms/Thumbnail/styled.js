import styled from 'styled-components';

export const StyledThumbnail = styled.div`
  width: 100%;
  height: ${({ height }) => height};
  display: block;
  border-radius: 10px;
  margin: auto;
  background-image: url(${({ img }) => img || '../../../public/404.gif'});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
