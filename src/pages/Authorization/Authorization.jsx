import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import cl from './Authorization.module.scss';
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

function Authorization({ setCookie }) {
	const [userName, setUserName] = React.useState('');
	const [isLoading, setIsLoading] = React.useState(false);
	const dispatch = useDispatch();

	const submitForm = async (e) => {
		e.preventDefault();
		const userNameValue = e.target.userName.value;
		if (userNameValue !== '') {
			setIsLoading(true);
			await axios.post('/login', { userName: userNameValue }).then((res) => {
				dispatch({ type: "IS_LOGINED", isLogined: true, userName: res.data.name, tasks: res.data.tasks });
				setCookie('user', res.data.name, { maxAge: 25 * 60 * 1000 });
			});
		}
	}

	return (
		<form action="#" className={cl.authorization} onSubmit={submitForm}>
			<Input
				value={userName}
				onChange={e => setUserName(e.target.value)}
				name='userName'
				placeholder="Enter your Name"
			/>
			<Button color='red' disabled={isLoading}>{isLoading ? '...' : 'Log In'}</Button>
		</form>
	);
}

export default Authorization;