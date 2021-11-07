import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import cl from './DeleteTask.module.scss';
import Button from '../button/Button';

function DeleteTask() {
	const [isLoading, setIsLoading] = React.useState(false);
	const dispatch = useDispatch();
	const modalTask = useSelector(state => state.modal.task);
	const userName = useSelector(state => state.currentUser.userName);

	const clickOnBack = () => {
		dispatch({ type: "CLOSE_MODAL", onModal: false });
	}
	const clickOnDelete = async () => {
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
		<div className={cl.deleteTask}>
			<div className={cl.text}>
				Are you sure?
			</div>
			<div className={cl.buttons}>
				<Button onClick={clickOnBack}>Back</Button>
				<Button onClick={clickOnDelete} disabled={isLoading}>{isLoading ? '...' : 'Delete'}</Button>
			</div>
		</div>
	);
}

export default DeleteTask;