import { useEffect, useState } from 'react'
import LoadingGraphic from '../components/LoadingGraphic';
import './MoviePage.css';
import Movies from '../json/movies.json';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const MoviePage = ({ changeLinkColor }) => {

	let { id } = useParams();
	let navigate = useNavigate();
    useEffect( () => {
		window.scrollTo(0, 0);
		updateWindowDimensions();
    }, [])

	useEffect( () => {
		changeLinkColor("grey")
    }, [changeLinkColor])

	const [ loaded, setLoaded ] = useState(false);
	const [ width, setWidth ] = useState(0);
	const [ movie, setMovie ] = useState(Movies[id])
    
    const nextMovie = e => {
        e.preventDefault();
        let plusOne = +id + 1;
        let newMovie = Movies[plusOne] ? plusOne : 0;
        navigate(`/movie-page/${newMovie}`);
        setMovie(Movies[newMovie]);
        setLoaded(false);
    }
    const previousMovie = e => {
        e.preventDefault();
        let length = Movies.length;
        let minusOne = +id - 1;
        let newMovie = Movies[minusOne] ? minusOne : length - 1;
        navigate(`/movie-page/${newMovie}`);
        setMovie(Movies[newMovie]);
        setLoaded(false);
    }
    const loadComplete = () => {
		setLoaded(true);
		setWidth(window.innerWidth);
    }
    const updateWindowDimensions = () => {
		setWidth(window.innerWidth);
    }

	let iframeStyle  = {
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: '0',
		left: '0'
	}
	let paddingTop =  (+movie.height / +movie.width) * 100;
	
	return (
		<div className="movie-page-background">
		<section className="movie-page-shell">
			<div className="button-div">
				<span className="prevNext" onClick={ previousMovie }>previous</span>
				<span className="prevNext" onClick={ nextMovie }>next</span>
			</div>
			<div className="movie-shell" style={{paddingTop: `${paddingTop}%`, position: 'relative'}}>
				<LoadingGraphic w={iframeStyle.width} h={iframeStyle.height} loaded={loaded} browserWidth={width} />
				<iframe 
				id="iframe"
				className="iFrameClass"
				style={iframeStyle}
				src={movie.src}  
				title={movie.title} 
				
				frameBorder="0" 
				allow="autoplay; fullscreen" 
				onLoad={ () => loadComplete() }
				allowFullScreen></iframe>
				
			</div>
			<div className='movie-info'>
				<ul>
					<li>{movie.title}</li>
					<li>{movie.subtitle}</li>
					<li>{movie.info}</li>
				</ul>
				<p>{movie.desc}</p>
			</div>
		</section>
		</div>
	)

}
export default MoviePage;