import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AvatarImg, RelativePos } from './styled';
import { ButtonAtom, MenuAtom, TextAtom } from '../../atoms';
import { GlobalContext } from '../../states/GlobalContext';
import PropTypes from 'prop-types';

function Avatar({ className }) {
  let [hide, setHide] = useState(true);
  const [state, dispatch] = useContext(GlobalContext);
  const history = useHistory();
  const defaultImg = require('../../assets/img/profile_icon.png');
  

  function clickHandler() {
    setHide(!hide)
  }

  function logout() {
    dispatch({ type: 'logout' });
    history.push('/login');
  }

  return (
      <RelativePos onClick={clickHandler} onKeyDown={clickHandler}>
        <ButtonAtom round padding="0.5rem" className={className}>
          <AvatarImg src={state.session ? state.session.avatarUrl : defaultImg} alt="avatar" />
        </ButtonAtom>
        <MenuAtom hide={hide} siblingHeight="66px" alignRight>
          { !state.session ? (
            <Link to="/login">
              <TextAtom type="label">Iniciar sesión</TextAtom>
            </Link>
          ) : (<div onClick={logout} onKeyDown={logout}><TextAtom type="label">Cerrar sesión</TextAtom></div>) 
          }
        </MenuAtom>
      </RelativePos>
  );
}

Avatar.propTypes = {
  className: PropTypes.string
}

Avatar.defaultProps = {
  className: null
}

export default Avatar;
