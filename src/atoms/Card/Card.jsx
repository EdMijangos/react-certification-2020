import React from 'react';
import { StyledCard } from './styled';
import PropTypes from 'prop-types';

function Card({ id, children }) {
  return <StyledCard data-testid={id}>{children}</StyledCard>;
}

Card.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node
}

Card.defaultProps = {
  id: null,
  children: null
}

export default Card;
