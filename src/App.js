import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './page/Home/Home';
import MovieList from './components/movielist/movielist';
import "react-loading-skeleton/dist/skeleton.css"
import Movie from './page/movieDetail/movie';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="movie/:id" element={<Movie/>}></Route>
        <Route path="movies/:type" element={<MovieList/>}></Route>
        <Route path="/*" element={<h1>error page</h1>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
