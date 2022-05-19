import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import MoviePage from './pages/MoviePage';
import PhotoPage from './pages/PhotoPage';
import Footer from './components/Footer';
import Movies from './pages/Movies';
import Photos from './pages/Photos';
import About from './pages/About'

class App extends React.Component {

  state = {
    movieHeight: 0,
	linkColor: "grey"
  }

  changeLinkColor = (linkColor) => {
	  this.setState({linkColor})
  }

  setHeight = (movieHeight) => {
    this.setState({movieHeight})
  }
  
  render () {

    return (
      <div className="App">
        
        <Menu linkColor={this.state.linkColor} />
          <main>
			<Switch>
				<Route exact path="/" render={ () => <Home changeLinkColor={this.changeLinkColor} /> } />
				<Route path="/films" render={ () => <Movies changeLinkColor={this.changeLinkColor}/> } />
				<Route path="/photos" render={ () => <Photos changeLinkColor={this.changeLinkColor} /> } />
				<Route path="/about" render={ () => <About  linkColor={this.state.linkColor} changeLinkColor={this.changeLinkColor} /> } />
				<Route path="/movie-page/:id" render={ (props) => <MoviePage {...props} setHeight={this.setHeight} changeLinkColor={this.changeLinkColor}/> } />
				<Route path="/photo-page/:id" render={ (props) => <PhotoPage {...props} changeLinkColor={this.changeLinkColor} /> } />
				<Route component={NotFound} />
			</Switch>
          </main>
		  <Footer />
      </div>
    );
  }
 
}

export default App;
