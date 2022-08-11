//  import browser router rote and switch

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './components/user/User';

import Nav from './components/nav/Nav';
import Posts from './components/posts/Posts';
import Suggestions from './components/suggestions/Suggestions';
import Explore from './components/explore/Explore';
import Login from './components/auth/Login';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
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
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
