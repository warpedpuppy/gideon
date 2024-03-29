import './Footer.css';
import Vimeo from '../svgs/vimeo.svg';
import YouTube from '../svgs/youtube.svg';
const Footer = ({movieHeight}) =>  {

	let iframeHeight = document.getElementById("iframe") ? document.getElementById("iframe").clientHeight : 0 ;
	let height = Math.max(iframeHeight, movieHeight) + 100;
	let footerStyle = {
		paddingTop: `${height}px`
	}
	return (
		<footer style={ footerStyle }>
			<a href="https://vimeo.com/user38547687" rel="noreferrer" target="_blank"><img alt="vimeo logo" src={ Vimeo } /></a>
			<a href="https://www.youtube.com/results?search_query=gideon+baeza" rel="noreferrer" target="_blank"><img alt="vimeo logo" src={ YouTube } /></a>
		</footer>
	)

}
export default Footer;