import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import MoviePage from './pages/MoviePage';
import Footer from './components/Footer';
import Movies from './pages/Movies';
import About from './pages/About'

const App = () => {

//   const [ movieHeight, setMovieHeight ] = useState(0);
  const [ linkColor, setLinkColor ] = useState("grey");

  const changeLinkColor = (linkColor) => {
	setLinkColor(linkColor)
  }

//   const setHeight = (movieHeight) => {
//     setMovieHeight(movieHeight)
//   }
  
return (
	<div className="App">
		<Menu linkColor={ linkColor } />
		<main>
			<Routes>
				<Route path="/" element={ <Home changeLinkColor={ changeLinkColor } />} />
				<Route path="/films" element={ <Movies changeLinkColor={ changeLinkColor }/> } />
				<Route path="/about" element={  <About  linkColor={ linkColor } changeLinkColor={ changeLinkColor } /> } />
				<Route path="/movie-page/:id" element={ <MoviePage changeLinkColor={ changeLinkColor }/> } />
				<Route path="*" element={ <NotFound /> } />
			</Routes>
		</main>
		<Footer />
	</div>
);
  
}

export default App;
