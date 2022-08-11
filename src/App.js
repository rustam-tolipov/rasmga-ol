//  import browser router rote and switch

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './components/user/User';

import Nav from './components/nav/Nav';
import Posts from './components/posts/Posts';
import Suggestions from './components/suggestions/Suggestions';
import Explore from './components/explore/Explore';

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
          <Route path='/users/:id' element={<User />} />
          <Route path='/explore' element={<Explore />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
