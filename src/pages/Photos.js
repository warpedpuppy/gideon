import React, { useEffect } from 'react'
import './Home.css';
import PageTemplate from '../components/templates/PageTemplate';
import PhotosJSON from '../json/photos.json';

const Photos = props => {

	const { changeLinkColor } = props;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

	useEffect(() => {
		changeLinkColor("grey")
	}, [changeLinkColor])

	return (
         <PageTemplate 
			subtitle='Photography has given me an outlet to look at new terrain.'  
			xml={PhotosJSON} 
			/>
    )
    
}
export default Photos;