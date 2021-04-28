import React from 'react';
import { StyledText } from './styled';
import PropTypes from 'prop-types';

function TextAtom({ type, padding, children }) {
  return (
    <StyledText type={type} padding={padding}>
      {children}
    </StyledText>
  );
}

TextAtom.propTypes = {
  type: PropTypes.string,
  padding: PropTypes.string,
  children: PropTypes.string
}

TextAtom.defaultProps = {
  type: null,
  padding: null,
  children:null,
}

export default TextAtom;
