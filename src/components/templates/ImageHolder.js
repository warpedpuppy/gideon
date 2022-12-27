import React, { useState } from 'react';
import './ImageHolder.css';
import { useNavigate } from "react-router-dom";

const ImageHolder = props => {

	const { thumbnail, title, id, type } = props;
	let navigate = useNavigate();

	let [ loaded, setLoaded ] = useState(false)
	let img = new Image();
	img.src = thumbnail;
	img.onload = e => setLoaded(true)
	let style = { backgroundImage: `url('${img.src}')`}

	function viewMovie() {
		if (type === 'films') {
			navigate(`/movie-page/${id}`)
		} else {
			navigate(`/photo-page/${id}`)
		}
		
	}

	return (
			<div className={`thumbnail ${ loaded ? 'loaded' : ''}`} style={ style } onClick={ viewMovie }>
				<div className='thumbnail-cover'>{ title }</div>
			</div>
	)
}

export default ImageHolder;