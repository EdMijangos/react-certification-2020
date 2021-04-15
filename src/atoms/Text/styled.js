import styled from 'styled-components';

export const StyledText = styled.span`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  padding: ${({ padding }) => padding || '0'};
  color: ${({ theme }) => theme.text};
  ${({ type }) => {
    switch (type) {
      case 'label':
        return 'font-size: 0.875rem';
      case 'subheader':
        return 'font-size: 1rem';
      case 'header':
        return 'font-size: 1.25rem';
      case 'title':
        return 'font-size: 3.75rem';
      default:
        return 'font-size: 0.875rem; opacity: 0.54';
    }
  }}
`;
