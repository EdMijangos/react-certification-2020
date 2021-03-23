import React from 'react';
import styled from 'styled-components';
import ButtonAtom from '../../atoms/Button';

const AvatarImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
`


function Avatar(props) {
    return (
        <ButtonAtom round padding="0.5rem" className={props.className}>
            <AvatarImg src='../../assets/img/profile_icon.png' />
        </ButtonAtom>
    )
}

export default Avatar;