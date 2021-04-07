import styled from 'styled-components';

export const StyledText = styled.span`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  padding: ${({ padding }) => padding || '0'};
  ${({ type }) => {
    switch (type) {
      case 'label':
        return 'color: white; font-size: 0.875rem';
      case 'subheader':
        return 'color: black; font-size: 1rem';
      case 'header':
        return 'color: black; font-size: 1.25rem';
      case 'title':
        return 'color: black; font-size: 3.75rem';
      default:
        return 'color: rgba(0, 0, 0, 0.54); font-size: 0.875rem';
    }
  }}
`;
