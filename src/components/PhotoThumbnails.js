import React from 'react';
import './PhotoThumbnails.css';
import PhotoThumbnail from './PhotoThumbnail';
const PhotoThumbnails = props => {
 const { thumbnails, changePhoto } = props;

 return (
		<div className='photo-page-thumbnails'>
		{
			thumbnails.map( (thumbnail, key) => {
				return <PhotoThumbnail thumbnail={thumbnail} key={key} number={key} changePhoto={changePhoto}  />
			})
		}
		</div>
	)
}
export default PhotoThumbnails;