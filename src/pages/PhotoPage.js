import React, { useState, useEffect } from 'react';
import './PhotoPage.css';
import Photos from '../json/photos.json';
import PhotoThumbnails from '../components/PhotoThumbnails';

const PhotoPage = props => {
	
    const { changeLinkColor } = props;
	let [ photos, setPhotos ] = useState([]);
	let [ photo, setPhoto ] = useState('');
	let [ loaded, setLoaded ] = useState(false)
	let [ number, setNumber ] = useState(0)

	useEffect(() => {
		let { id } = props.match.params;
		let temp = [];
		for (let i = 1; i <= Photos[id].total; i++) {
			temp.push(`https://walthermidcoast.s3.amazonaws.com/gideon/${Photos[id].root}/${i}.jpg`)
		}
		setPhotos(temp);
		changePhoto(temp[0]);
	}, [props])
	
	useEffect(() => {
		changeLinkColor("grey")
	}, [changeLinkColor])

	function changePhoto(str, number) {
		setLoaded(false);
		let img = new Image();
		img.src = str;
		img.onload = () => setLoaded(true)
		setPhoto(str);
		setNumber(number);
	}

	return (
		<div className="photo-page-container">
			{
				!loaded && <div className='photo-loading'>loading!</div>
			}
			<img 
				src={photo} 
				className={`primary-photo ${ loaded ? 'show' : '' }`} 
				alt={`primary #${number}`}
				/>
			<PhotoThumbnails thumbnails={photos} changePhoto={changePhoto} />
		</div>
	)
}
export default PhotoPage;