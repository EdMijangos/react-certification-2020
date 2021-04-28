import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { GlobalContext } from '../../states/GlobalContext';

function PrivateRoute({ children, ...rest }) {
  const [state] = useContext(GlobalContext);

  return (
    <Route {...rest} render={() => (state.session ? children : <Redirect to="/" />)} />
  );
}

export default PrivateRoute;
