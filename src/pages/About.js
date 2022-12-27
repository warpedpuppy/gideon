import React, {useEffect} from 'react';
import './About.css';

const About = ({linkColor, changeLinkColor}) => {

	useEffect(() => {
		changeLinkColor("white")
	}, [linkColor, changeLinkColor])

	return (
		<section id='about-container'>
			<div id='about-content'>
			<div className="first-section-about">
				<div className="first-section-text">
					<h2>Director</h2>
					<p>Email or call if you like my work and would be interested in collaborating on a project.</p>
					<p><a href="mailto:gideonbaeza@gmail.com">gideonbaeza@gmail.com</a></p>
					<p><a href="tel:207-230-9435">207.230.9435</a></p>
				</div>
				<img src="/bmps/20221227/gideon_portrait.jpg" alt="Gideon Baeza"/>
			</div>
			<div className='about-right-column'>
				<div>
					<h3>Education</h3>
					<div>
						<h4>Emerson College '22</h4>
						<p>Visual and Media Arts</p>
					</div>
					<div>
						<h4>Maine Media College</h4>
					</div>
				</div>
				<div>
					<h3>Work Experience</h3>
					<h4>Maine Media College</h4>
					<p>Teaching Assistant for Summer workshops. Instructors included:</p>
					<ul>
						<li>Roy Wagner, ASC</li>
						<li>Michael Goi, ASC</li>
						<li>Peter Werner</li>
						<li>Chris Wairegi</li>
						<li>Justyn Davis</li>
						<li>Geary McLeod</li>
					</ul>
					<h4>Connelly Partners</h4>
					<p>Production Intern</p>
				</div>
				<div className="references-div">
					<h3>References</h3>
					<h4>Available upon request</h4>
				</div>
			</div>
			</div>
		</section>
	)
}

export default About;