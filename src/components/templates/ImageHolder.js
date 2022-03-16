import React, { useState } from 'react';
import './ImageHolder.css';
import { useHistory } from 'react-router-dom';

const ImageHolder = props => {

	const { thumbnail, title, id, type } = props;
	let history = useHistory();

	let [ loaded, setLoaded ] = useState(false)
	let img = new Image();
	img.src = thumbnail;
	img.onload = e => setLoaded(true)
	let style = { backgroundImage: `url('${img.src}')`}

	function viewMovie() {
		if (type === 'films') {
			history.push(`/movie-page/${id}`)
		} else {
			history.push(`/photo-page/${id}`)
		}
		
	}

	return (
			<div className={`thumbnail ${ loaded ? 'loaded' : ''}`} style={ style } onClick={ viewMovie }>
				<div className='thumbnail-cover'>{ title }</div>
			</div>
	)
}

export default ImageHolder;