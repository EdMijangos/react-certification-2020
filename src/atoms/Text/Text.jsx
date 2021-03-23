import React from 'react';
import styled from 'styled-components';

const StyledText = styled.span`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  padding: ${(props) => (props.padding ? props.padding : '0')};
  ${(props) => {
    switch (props.type) {
      case 'label':
        return 'color: white; font-size: 1rem';
      case 'subheader':
        return 'color: black; font-size: 1.25rem';
      case 'title':
        return 'color: black; font-size: 3.75rem';
      default:
        return 'color: rgba(0, 0, 0, 0.54); font-size: 0.875rem';
    }
  }}
`;

function TextAtom(props) {
  return (
    <StyledText type={props.type} padding={props.padding}>
      {props.children}
    </StyledText>
  );
}

export default TextAtom;
