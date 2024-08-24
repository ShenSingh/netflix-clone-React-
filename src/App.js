import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import TvShows from './Pages/TvShows';
import NewAndPopular from './Pages/NewAndPopular';
import MyList from './Pages/MyList';
import BrowseByLanguages from './Pages/BrowseByLanguages';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/new-popular" element={<NewAndPopular />} />
          <Route path="/my-list" element={<MyList />} />
          <Route path="/browse-languages" element={<BrowseByLanguages />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
