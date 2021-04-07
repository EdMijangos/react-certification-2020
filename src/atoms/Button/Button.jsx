import React from 'react';
import { StyledButton } from './styled';

function ButtonAtom({ round, padding, className, children }) {
  return (
    <StyledButton round={round} padding={padding} className={className}>
      {children}
    </StyledButton>
  );
}

export default ButtonAtom;
