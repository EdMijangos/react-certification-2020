import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import { ButtonAtom, InputAtom, TextAtom } from '../../atoms';
import { GlobalContext } from '../../states/GlobalContext'

import { mockedLogin } from '../../providers/Auth';
import './Login.styles.css';

function LoginPage() {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [, dispatch] = useContext(GlobalContext);

  function authenticate(event) {
    event.preventDefault();
    mockedLogin(username, password)
      .then(resp => {
        dispatch({ type: 'setSession', payload: resp})
        history.push('/');
      })
      .catch(err => {
        console.log(err)
      });
  }

  return (
    <section className="login">
      <TextAtom type="header">Enter your credentials!</TextAtom>
      <form onSubmit={authenticate} className="login-form">
        <div className="form-group">
          <label htmlFor="username">
            <TextAtom type="subheader">Username</TextAtom>
            <InputAtom id="username" keyUp={(e) => setUsername(e.target.value)} />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <TextAtom type="subheader">Password</TextAtom>
            <InputAtom id="password" type="password" keyUp={(e) => setPassword(e.target.value)} />
          </label>
        </div>
        <ButtonAtom type="submit">login</ButtonAtom>
      </form>
    </section>
  );
}

export default LoginPage;
