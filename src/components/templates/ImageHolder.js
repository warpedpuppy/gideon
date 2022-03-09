import React, { useState } from 'react';
import './ImageHolder.css';

const ImageHolder = props => {

	let [ loaded, setLoaded ] = useState(false)
	let img = new Image();
	img.src = props.thumbnail;
	img.onload = e => setLoaded(true)
	let style = { backgroundImage: `url('${img.src}')`}
	return <div className={`thumbnail ${ loaded? 'loaded' : ''}`} style={style}></div>
}

export default ImageHolder;