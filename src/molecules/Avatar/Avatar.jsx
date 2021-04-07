import React from 'react';
import { AvatarImg } from './styled';
import { ButtonAtom } from '../../atoms';
import Icon from '../../assets/img/profile_icon.png';

function Avatar({ className }) {
  return (
    <ButtonAtom round padding="0.5rem" className={className}>
      <AvatarImg src={Icon} />
    </ButtonAtom>
  );
}

export default Avatar;
