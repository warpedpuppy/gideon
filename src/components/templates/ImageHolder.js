import React, { useState } from 'react';
import './ImageHolder.css';
import { useHistory } from 'react-router-dom';

const ImageHolder = props => {

	const { thumbnail, title, id } = props;
	let history = useHistory();

	let [ loaded, setLoaded ] = useState(false)
	let img = new Image();
	img.src = thumbnail;
	img.onload = e => setLoaded(true)
	let style = { backgroundImage: `url('${img.src}')`}

	function viewMovie() {
		history.push(`/movie-page/${id}`)
	}

	return (
			<div className={`thumbnail ${ loaded ? 'loaded' : ''}`} style={ style } onClick={ viewMovie }>
				<div className='thumbnail-cover'>{ title }</div>
			</div>
	)
}

export default ImageHolder;