import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cl from './ToDo.module.scss';
import AddTaskButton from '../../components/AddTaskButton/AddTaskButton';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import TaskList from '../../components/TaskList/TaskList';

function ToDo({ removeCookie }) {
	const dispatch = useDispatch();
	const userName = useSelector(state => state.currentUser.userName);

	const logOut = (e) => {
		e.preventDefault();
		removeCookie('user');
		dispatch({ type: "IS_LOGINED", isLogined: false, userName: '', tasks: [] });
	}

	return (
		<div className={cl.wrapper}>
			<div className={cl.header}>
				<div className={cl.title}>{userName}</div>
				<Button color='white' onClick={logOut}>Log Out</Button>
			</div>
			<div className={cl.body}>
				<AddTaskButton />
				<TaskList />
			</div>
			<Modal />
		</div>
	);
}

export default ToDo;