import React from 'react';
import './PageTemplate.css';
import ImageHolder from './ImageHolder';
const PageTemplate = props => {
	const { subtitle, xml } = props
	return (
		<section id="page-template-container">
			<h2>{ subtitle }</h2>
			<div className='thumbnails'>
				{
					xml.map( (item, key) => {
						
						return (
						<div key={key} className='thumbnail-container'>
							<ImageHolder thumbnail={item.thumbnail} />
						</div>
						)
					})
				}
				
			</div>
		</section>
	
	
	)
}

export default PageTemplate;