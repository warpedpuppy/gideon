import React, { Component } from 'react'
import LoadingGraphic from '../components/LoadingGraphic';
import './MoviePage.css';
import Movies from '../json/movies.json';

export default class MoviePage extends Component {

    // constructor(props) {
    //     super(props); 
    //     // this.widthChange = 600;
    //     // window.addEventListener('resize', this.updateWindowDimensions);
    // }

    componentDidMount () {
		let movie = Movies[this.props.match.params.id];
		console.log('component did mount', movie)
		let height = movie.height;
		window.scrollTo(0, 0);
		this.props.setHeight(height)
		this.updateWindowDimensions();
    }
    state = {
        loaded: false,
        width: 0,
        height: 0,
        browserWidth: 0,
        movie: Movies[this.props.match.params.id]
    }
    nextMovie = (e) => {
        e.preventDefault();
        let plusOne = +this.props.match.params.id + 1;
        let newMovie = Movies[plusOne] ? plusOne : 1;
        this.props.history.push(`/movie-page/${newMovie}`)
        this.setState({movie:  Movies[newMovie]});
        this.setState({loaded: false})
    }
    previousMovie = (e) => {
        e.preventDefault();
        let length = Movies.length;
        let minusOne = +this.props.match.params.id - 1;
        let newMovie = Movies[minusOne] ? minusOne : length - 1;
        this.props.history.push(`/movie-page/${newMovie}`)
        this.setState({movie:  Movies[newMovie]});
        this.setState({loaded: false})
    }
    loadComplete = () => {
       this.setState({loaded: true, width: window.innerWidth, height: window.innerHeight})
    }
    updateWindowDimensions = () => {
       this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    render() {
		let iframeStyle  = {
            width: '100%',
            height: '100%',
			position: 'absolute',
			top: '0',
			left: '0'
        }
		let paddingTop =  (+this.state.movie.height / +this.state.movie.width) * 100;
		
        return (
            <div className="movie-page-background">
            <section className="movie-page-shell">
                <div className="button-div">
                    <span className="prevNext" onClick={this.previousMovie}>previous</span>
                    <span className="prevNext" onClick={this.nextMovie}>next</span>
                </div>
				<div className="movie-shell" style={{paddingTop: `${paddingTop}%`, position: 'relative'}}>
					<LoadingGraphic w={iframeStyle.width} h={iframeStyle.height} loaded={this.state.loaded} browserWidth={this.state.width} />
					<iframe 
					id="iframe"
					className="iFrameClass"
					style={iframeStyle}
					src={this.state.movie.src}  
					title={this.state.movie.title} 
					
					frameBorder="0" 
					allow="autoplay; fullscreen" 
					onLoad={ () => this.loadComplete() }
					allowFullScreen></iframe>
					
				</div>
				<div className='movie-info'>
					<ul>
						<li>{this.state.movie.title}</li>
						<li>{this.state.movie.subtitle}</li>
						<li>{this.state.movie.info}</li>
					</ul>
					<p>{this.state.movie.desc}</p>
				</div>
            </section>
            </div>
        )
    }
}
