//  import browser router rote and switch
import React, { Suspense } from 'react';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { checkAuthState } from './redux/actions/auth';

import './App.scss';

const User = React.lazy(() => import('./components/user/User'));

const Nav = React.lazy(() => import('./components/nav/Nav'));

const Posts = React.lazy(() => import('./components/posts/Posts'));
const CreatePost = React.lazy(() =>
  import('./components/CreatePost/CreatePost')
);

const Suggestions = React.lazy(() =>
  import('./components/suggestions/Suggestions')
);
const Explore = React.lazy(() => import('./components/explore/Explore'));
const Settings = React.lazy(() => import('./components/settings/Settings'));

const Login = React.lazy(() => import('./components/auth/Login'));
const SignUp = React.lazy(() => import('./components/auth/SignUp'));

const PrivateRoute = React.lazy(() =>
  import('./components/utils/PrivateRoute')
);

const Loading = React.lazy(() => import('./components/UI/Loading'));

// import CreatePost from './components/CreatePost/CreatePost';

// const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

function App() {
  const isLoading = useSelector((state) => state.auth.isLoading);

  const dispatch = useDispatch();
  dispatch(checkAuthState());
  return (
    <BrowserRouter>
      <div className="app">
        {isLoading ? (
          <Loading />
        ) : (
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route
                  path="/"
                  element={
                    <>
                      <Nav />
                      <Posts />
                      <Suggestions />
                    </>
                  }
                />
                <Route
                  path="/users/:id"
                  element={
                    <>
                      {' '}
                      <Nav />
                      <User />
                    </>
                  }
                />
                <Route
                  path="/explore"
                  element={
                    <>
                      {' '}
                      <Nav />
                      <Explore />
                    </>
                  }
                />
                <Route
                  path="/settings"
                  element={
                    <>
                      <Nav />
                      <Settings />
                    </>
                  }
                />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </Suspense>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
