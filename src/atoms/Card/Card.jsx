import React from 'react';
import { StyledCard } from './styled';

function Card({ id, children }) {
  return <StyledCard data-testid={id}>{children}</StyledCard>;
}

export default Card;
