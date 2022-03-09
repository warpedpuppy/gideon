import React from 'react';
import './About.css';

const About = props => {
	return (
		<section id='about-container'>
			<div id='about-content'>
			<div>
				<h2>Gideon Baeza :: Filmmaker</h2>
				<p>Email or call if you like my work and would be interested in collaborating on a project.</p>
				<p><a href="mailto:gideonbaeza@gmail.com">gideonbaeza@gmail.com</a></p>
				<p><a href="tel:207-230-9435">207.230.9435</a></p>
			</div>
			<div className='about-right-column'>
				<div>
					<h3>Education</h3>
					<div>
						<h4>Emerson College '22</h4>
						<p>Visual and Media Arts</p>
						<p>GPA 3.8</p>
					</div>
					<div>
						<h4>Maine Media College</h4>
						<p>Summers 2017-2020</p>
					</div>
				</div>
				<div>
					<h3>Work Experience</h3>
					<h4>Maine Media College</h4>
					<p>Technology Assistant for Summer workshops. Instructors included:</p>
					<ul>
						<li>Roy Wagner, ASC</li>
						<li>Michael Goi, ASC</li>
						<li>Peter Werner</li>
						<li>Chris Wairegi</li>
						<li>Justyn Davis</li>
						<li>Geary McLeod</li>
					</ul>
				</div>
				<div>
					<h3>References</h3>
					<h4>Available upon request</h4>
				</div>
			</div>
			</div>
		</section>
	)
}

export default About;