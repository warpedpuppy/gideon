import React, { useState } from 'react';
import './PhotoThumbnail.css';

const PhotoThumbnail = props => {

	const { thumbnail, changePhoto, number  } = props;
	let [ loaded, setLoaded ] = useState(false)
	let img = new Image();
	img.src = thumbnail;
	img.onload = e => setLoaded(true)
	
	return (
		<img 
			src={img.src} 
			onClick={() => changePhoto(thumbnail, number)}  
			alt={`thumbnail #${number}`} 
			className={`photo-page-thumbnail ${ loaded ? 'show' : '' }`} 
			/>
	)
}

export default PhotoThumbnail;