import './App.scss';
import Nav from './components/nav/Nav';
import Posts from './components/posts/Posts';
import Suggestions from './components/suggestions/Suggestions';

function App() {
  return (
    <div className='app'>
      <Nav />
      <Posts />
      <Suggestions />
    </div>
  );
}

export default App;
