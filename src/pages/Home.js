import React, { Component } from 'react'
import './Home.css';

export default class Home extends Component {
    imageLoaded = (e) => {
        e.target.classList.add("on")
    }
    componentDidMount = () => {
        window.scrollTo(0, 0);
		this.props.changeLinkColor("grey")
    }
    render() {
		let obj = {backgroundImage: `url('/bmps/20220308/background3.png')`}
        return (
            <>
                <div className="home-page">
                        <div id='home-page-background' style={obj}></div>
						<div id='home-page-text'>
							<p>Cultivating stories that navigate through human relationships and identity.</p>
							<p id='home-page-photo-credit'>Photo by Claire Richards</p>
						</div>
						
                </div>
            </>
        )
    }
}
