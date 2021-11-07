import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cl from './ToDo.module.scss';
import AddTaskButton from '../../UI/addTaskButton/AddTaskButton';
import Button from '../../UI/button/Button';
import Modal from '../../UI/modal/Modal';
import TaskList from '../../UI/taskList/TaskList';


function ToDo() {
	const dispatch = useDispatch();
	const userName = useSelector(state => state.currentUser.userName);


	const clickOnLogOut = (e) => {
		e.preventDefault();
		dispatch({ type: "IS_LOGINED", isLogined: false, userName: '', tasks: [] });
	}

	return (
		<div className={cl.wrapper}>
			<div className={cl.header}>
				<div className={cl.title}>{userName}</div>
				<Button onClick={clickOnLogOut}>Log Out</Button>
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