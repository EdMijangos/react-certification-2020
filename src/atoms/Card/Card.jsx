import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    min-width: 200px;
    max-width: 400px;
    min-height: 200px;
    cursor: pointer;
    padding: 2rem;
    margin: 0.5rem;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        background-color: rgba(255, 255, 255, 0.7);
    }
`

function Card(props) {
    return <StyledCard data-testid={props.id}>{props.children}</StyledCard>
}

export default Card;