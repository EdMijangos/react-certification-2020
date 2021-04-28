import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import PrivateRoute from '../../utils/PrivateRoute';

import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import ViewVideoPage from '../../pages/ViewVideo';
import FavoritesPage from '../../pages/Favorites';
import ViewFavoritePage from '../../pages/ViewFavorite';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <Layout>
          <Switch>
            {/* PUBLIC ROUTES */}
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/view/:videoId">
              <ViewVideoPage />
            </Route>
            {/* PRIVATE ROUTES */}
            <PrivateRoute exact path="/favorites">
              <FavoritesPage />
            </PrivateRoute>
            <PrivateRoute exact path="/favorites/:videoId">
              <ViewFavoritePage />
            </PrivateRoute>
            {/* DEFAULT */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
