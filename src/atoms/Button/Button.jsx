import React from 'react';
import { StyledButton } from './styled';
import PropTypes from 'prop-types';

function ButtonAtom({ round, padding, className, click, type, children }) {
  return (
    <StyledButton round={round} padding={padding} className={className} onClick={click} type={type}>
      {children}
    </StyledButton>
  );
}

ButtonAtom.propTypes = {
  round: PropTypes.bool,
  padding: PropTypes.string,
  className: PropTypes.string,
}

ButtonAtom.defaultProps = {
  round: false,
  padding: null,
  className: null,
}

export default ButtonAtom;
