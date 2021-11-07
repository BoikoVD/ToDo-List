import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cl from './Task.module.scss';
import axios from 'axios';
import DeleteTaskButton from '../deleteTaskButton/DeleteTaskButton';
import TaskCheckbox from '../taskCheckbox/TaskCheckbox';

function Task({ task }) {
	const dispatch = useDispatch();
	const userName = useSelector(state => state.currentUser.userName);
	const userTasks = useSelector(state => state.currentUser.tasks);

	const clickOnCheckbox = () => {
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
		<div className={task.isDone ? [cl.task, cl.taskDone].join(' ') : [cl.task, cl.taskNotDone].join(' ')}>
			<TaskCheckbox isDone={task.isDone} clickOnCheckbox={clickOnCheckbox} />
			<div className={task.isDone ? [cl.text, cl.textDone].join(' ') : [cl.text, cl.textNotDone].join(' ')}>
				<div className={task.isDone ? [cl.title, cl.titleDone].join(' ') : [cl.title, cl.titleNotDone].join(' ')}>
					{task.taskName}
				</div>
				<div className={cl.description}>
					{task.taskDescription}
				</div>
			</div>
			<DeleteTaskButton isDone={task.isDone} task={task} />
		</div>
	);
}

export default Task;