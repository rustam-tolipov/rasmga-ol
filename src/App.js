//  import browser router rote and switch

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/profile/Profile';

import Nav from './components/nav/Nav';
import Posts from './components/posts/Posts';
import Suggestions from './components/suggestions/Suggestions';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Nav />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Posts />
                <Suggestions />
              </>
            }
          />
          <Route path='/users/:id' element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
