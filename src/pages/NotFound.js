import { useEffect } from 'react';
import './NotFound.css';
import { useNavigate } from "react-router-dom";

const NotFound = () => {
	let navigate = useNavigate();
	useEffect(() => {
		navigate('/')
	}, [navigate]);

	return <h1 class="notFound">not found</h1>
}
export default NotFound;