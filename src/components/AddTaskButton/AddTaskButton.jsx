import React from 'react';
import cl from './AddTaskButton.module.scss';
import { useDispatch } from 'react-redux';

const AddTaskButton = () => {
	const dispatch = useDispatch();

	const clickOnAddTask = () => {
		dispatch({ type: "ON_MODAL", onModal: true, modalType: 'addTask', task: {} });
	}

	return (
		<button className={cl.addTask} onClick={clickOnAddTask}>
			+
		</button>
	);
}

export default AddTaskButton;