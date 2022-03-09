import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import MoviePage from './pages/MoviePage';
import Footer from './components/Footer';
import Movies from './pages/Movies';
import Photos from './pages/Photos';
import About from './pages/About'
class App extends React.Component {

  state = {
    movieHeight: 0
  }
  setHeight = (movieHeight) => {
    this.setState({movieHeight})
  }
  
  render () {
    return (
      <div className="App">
        
        <Menu />
          <main>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/films" component={Movies} />
				<Route path="/photos" component={Photos} />
				<Route path="/about" component={About} />
				<Route path="/movie-page/:id" render={ (props) => <MoviePage {...props} setHeight={this.setHeight} /> } />
				<Route component={NotFound} />
			</Switch>
          </main>
		  <Footer />
      </div>
    );
  }
 
}

export default App;
