import React from 'react';
import { StyledText } from './styled';

function TextAtom({ type, padding, children }) {
  return (
    <StyledText type={type} padding={padding}>
      {children}
    </StyledText>
  );
}

export default TextAtom;
