import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import cl from './AddTaskForm.module.scss';
import cn from 'classnames';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';

function AddTaskForm() {
	const [taskName, setTaskName] = React.useState('');
	const [taskDescription, setTaskDescription] = React.useState('');
	const [error, setError] = React.useState('');
	const [isLoading, setIsLoading] = React.useState(false);
	const dispatch = useDispatch();
	const userName = useSelector(state => state.currentUser.userName);
	const userTasks = useSelector(state => state.currentUser.tasks);

	const submitForm = async (e) => {
		e.preventDefault();
		const taskNameValue = e.target.taskName.value;
		const taskDescriptionValue = e.target.taskDescription.value;
		if (!taskNameValue) {
			setError('Please enter a name for the task');
			return;
		}
		for (let task of userTasks) {
			if (task.taskName === taskNameValue) {
				setError('You have already added this task');
				return;
			}
		}
		if (error === '') {
			setIsLoading(true);
			await axios.post('/addtask', {
				userName: userName,
				task: { taskName: taskNameValue, taskDescription: taskDescriptionValue, isDone: false }
			}).then((res) => {
				dispatch({ type: "MODIFY_TASKS", tasks: res.data });
			});
			setIsLoading(false);
			setTaskName('');
			setTaskDescription('');
			dispatch({ type: "CLOSE_MODAL", onModal: false });
		}
	}

	const setTaskNameValue = (value) => {
		setTaskName(value);
		if (error) {
			setError('');
		}
	};

	return (
		<form action="#" className={cl.modalAddTask} onSubmit={submitForm}>
			<div className={cl.label}>Task name <span>*</span></div>
			<div className={cl.inputWrapper}>
				<Input
					value={taskName}
					onChange={e => setTaskNameValue(e.target.value)}
					name='taskName'
					className={cl.input}
				/>
				<div className={cn(cl.errorMessage, {
					[cl.active]: error
				})}>{error}</div>
			</div>
			<div className={cl.label}>Task description</div>
			<Textarea
				rows="3"
				value={taskDescription}
				onChange={e => setTaskDescription(e.target.value)}
				name='taskDescription'
			/>
			<Button color='red' disabled={isLoading}>{isLoading ? '...' : 'Add new task'}</Button>
		</form>
	);
}

export default AddTaskForm;