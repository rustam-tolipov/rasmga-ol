//  import browser router rote and switch

import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import User from './components/user/User';

import Nav from './components/nav/Nav';
import Posts from './components/posts/Posts';
import Suggestions from './components/suggestions/Suggestions';
import Explore from './components/explore/Explore';
import Login from './components/auth/Login';
import PrivateRoute from './components/utils/PrivateRoute';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route
              path='/'
              element={
                <>
                  <Nav />
                  <Posts />
                  <Suggestions />
                </>
              }
            />
            <Route
              path='/users/:id'
              element={
                <>
                  {' '}
                  <Nav />
                  <User />
                </>
              }
            />
            <Route
              path='/explore'
              element={
                <>
                  {' '}
                  <Nav />
                  <Explore />
                </>
              }
            />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
