import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import cl from './Authorization.module.scss';
import Button from "../../UI/button/Button";
import Input from "../../UI/input/Input";

function Authorization() {
	const [userName, setUserName] = React.useState('');
	const [isLoading, setIsLoading] = React.useState(false);
	const dispatch = useDispatch();

	const clickOnLogIn = async (e) => {
		e.preventDefault();
		if (userName !== '') {
			setIsLoading(true);
			await axios.post('/login', { userName: userName }).then((res) => {
				dispatch({ type: "IS_LOGINED", isLogined: true, userName: userName, tasks: res.data.tasks });
			});
		}
	}

	return (
		<form action="#" className={cl.authorization}>
			<Input
				value={userName}
				onChange={e => setUserName(e.target.value)}
				placeholder="Enter your Name"
			/>
			<Button onClick={clickOnLogIn} disabled={isLoading}>{isLoading ? '...' : 'Log In'}</Button>
		</form>
	);
}

export default Authorization;