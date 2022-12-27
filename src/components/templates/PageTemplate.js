import React from 'react';
import './PageTemplate.css';
import ImageHolder from './ImageHolder';
const PageTemplate = props => {
	const { xml } = props
	return (
		<section id="page-template-container">
			<div className='thumbnails'>
				{
					xml.map( (item, key) => {
						
						return (
						<div key={key} className='thumbnail-container'>
							<ImageHolder {...item} id={key} />
						</div>
						)
					})
				}
				
			</div>
		</section>
	
	
	)
}

export default PageTemplate;