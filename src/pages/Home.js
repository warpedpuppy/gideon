import { useEffect, useState } from 'react'
import './Home.css';

const Home = ({changeLinkColor}) =>  {

	const [ backgroundURL, setBackgroundURL ] = useState('');

	useEffect( () => {
		window.scrollTo(0, 0);
		let img = new Image();
		img.src = '/bmps/20221227/cover_20221227.png';
		img.onload = e => setBackgroundURL('/bmps/20221227/cover_20221227.png')
	}, []);

	useEffect(() => {
		changeLinkColor("grey");
	}, [changeLinkColor]);

	let obj = {backgroundImage: `url('${backgroundURL}')`}
	return (
			<div className="home-page">
					<div id='home-page-background' className={`${backgroundURL !== '' ? 'image-loaded' : ''}`} style={obj} />
			</div>
	)

}
export default Home;