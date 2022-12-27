import { useEffect } from 'react'
import './Home.css';

const Home = ({changeLinkColor}) =>  {

	useEffect( () => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		changeLinkColor("grey");
	}, [changeLinkColor]);

	let obj = {backgroundImage: `url('/bmps/20221227/cover_20221227.png')`}
	return (
			<div className="home-page">
					<div id='home-page-background' style={obj} />
			</div>
	)

}
export default Home;