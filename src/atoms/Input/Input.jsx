import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    width: 25ch;
    padding: 8px 8px 8px 0px;
    border: 0;
    outline: none;
    border-radius: 5px;
    color: white;
    font-size: 1rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    background-color: rgba(255, 255, 255, 0.3);
    padding-left: ${props => props.icon ? "calc(1em + 32px)" : "8px"};
    ::placeholder {
        color: white;
        opacity: 0.6;
    }

    @media (max-width: 375px) {
        width: 18ch;
    }
`;

function InputAtom(props) {
    return <StyledInput icon={props.icon} placeholder={props.placeholder} />
}

export default InputAtom;