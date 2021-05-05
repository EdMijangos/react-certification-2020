import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 25ch;
  padding: 8px 8px 8px 0px;
  border: 0;
  outline: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  background-color: ${({ theme }) => (theme.id === 'light' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)')} ;
  padding-left: ${({ icon }) => (icon ? 'calc(1em + 32px)' : '8px')};
  ::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.6;
  }

  @media (max-width: 375px) {
    width: 18ch;
  }
`;
