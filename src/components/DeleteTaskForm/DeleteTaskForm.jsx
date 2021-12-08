import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import cl from './DeleteTaskForm.module.scss';
import Button from '../Button/Button';

function DeleteTaskForm() {
	const [isLoading, setIsLoading] = React.useState(false);
	const dispatch = useDispatch();
	const modalTask = useSelector(state => state.modal.task);
	const userName = useSelector(state => state.currentUser.userName);

	const back = (e) => {
		e.preventDefault();
		dispatch({ type: "CLOSE_MODAL", onModal: false });
	}
	const submitForm = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		await axios.post('/deletetask', {
			userName: userName,
			task: modalTask
		}).then((res) => {
			dispatch({ type: "MODIFY_TASKS", tasks: res.data });
		});
		setIsLoading(false);
		dispatch({ type: "CLOSE_MODAL", onModal: false });
	}

	return (
		<form className={cl.deleteTask} onSubmit={submitForm}>
			<div className={cl.text}>
				Are you sure?
			</div>
			<div className={cl.buttons}>
				<Button onClick={back} color='red'>Back</Button>
				<Button color='red' disabled={isLoading}>{isLoading ? '...' : 'Delete'}</Button>
			</div>
		</form>
	);
}

export default DeleteTaskForm;