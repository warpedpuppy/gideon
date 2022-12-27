import React from 'react'
import './Menu.css';
import { Link } from 'react-router-dom';
const Header = ({ linkColor}) => {
        return (
            <nav className="nav-wrapper">
				<div id='nav-top-band'></div>
				<div id='nav-content'>
					<Link to='/'><img src={'/bmps/20220308/logo.png'} alt='gideon baeza logo' /></Link>
					<input className="nav-hamburger" id="sub-checkbox" type="checkbox" />
					<div className="nav-hamburger-spans sub">
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className={`nav-links ${ linkColor === "white" ? 'about-page' : ''}`}>
						<span><Link to='/films'>film</Link></span>
						<span><Link to='/about'>about</Link></span>
					</div>
				</div>
            </nav>
        )
}
export default Header;
