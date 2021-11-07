import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import cl from './AddTask.module.scss';
import Input from '../input/Input';
import Textarea from '../textarea/Textarea';
import Button from '../button/Button';

function AddTask() {
	const [newTaskName, setNewTaskName] = React.useState('');
	const [newTaskDescription, setNewTaskDescription] = React.useState('');
	const [isLoading, setIsLoading] = React.useState(false);
	const dispatch = useDispatch();
	const userName = useSelector(state => state.currentUser.userName);

	const clickOnAddNewTask = async (e) => {
		e.preventDefault();
		if (newTaskName !== '') {
			setIsLoading(true);
			await axios.post('/addtask', {
				userName: userName,
				task: { taskName: newTaskName, taskDescription: newTaskDescription, isDone: false }
			}).then((res) => {
				dispatch({ type: "MODIFY_TASKS", tasks: res.data });
			});
			setIsLoading(false);
			setNewTaskName('');
			setNewTaskDescription('');
			dispatch({ type: "CLOSE_MODAL", onModal: false });
		}
	}

	return (
		<form action="#" className={cl.modalAddTask}>
			<div className={cl.label}>Task name <span>*</span></div>
			<Input
				value={newTaskName}
				onChange={e => setNewTaskName(e.target.value)}
			/>
			<div className={cl.label}>Task description</div>
			<Textarea
				rows="3"
				value={newTaskDescription}
				onChange={e => setNewTaskDescription(e.target.value)}
			/>
			<Button onClick={clickOnAddNewTask} disabled={isLoading}>{isLoading ? '...' : 'Add new task'}</Button>
		</form>
	);
}

export default AddTask;