import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cl from './Task.module.scss';
import cn from 'classnames';
import axios from 'axios';
import DeleteButton from '../DeleteButton/DeleteButton';
import Checkbox from '../Checkbox/Checkbox';

function Task({ task }) {
	const dispatch = useDispatch();
	const userName = useSelector(state => state.currentUser.userName);
	const userTasks = useSelector(state => state.currentUser.tasks);

	const checkTask = () => {
		for (let userTask of userTasks) {
			if (userTask.taskName === task.taskName && userTask.taskDescription === task.taskDescription) {
				userTask.isDone = !userTask.isDone;
			}
		}
		dispatch({ type: "MODIFY_TASKS", tasks: [...userTasks] });
		axios.post('/checktask', {
			userName: userName,
			tasks: userTasks,
		});
	}

	return (
		<div className={cn(cl.task, {
			[cl.taskIsDone]: task.isDone
		})}>
			<Checkbox isChecked={task.isDone} onClick={checkTask} />
			<div className={cn(cl.text, {
				[cl.textIsDone]: task.isDone
			})}>
				<div className={cn(cl.title, {
					[cl.titleIsDone]: task.isDone
				})}>
					{task.taskName}
				</div>
				<div className={cl.description}>
					{task.taskDescription}
				</div>
			</div>
			<DeleteButton isDone={task.isDone} task={task} />
		</div>
	);
}

export default Task;