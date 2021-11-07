import { useSelector } from 'react-redux';
import Task from '../taskComponent/Task';
import cl from './TaskList.module.scss';

function TaskList() {
	const userTasks = useSelector(state => state.currentUser.tasks);

	userTasks.sort(function (x, y) {
		return (x.isDone === y.isDone) ? 0 : x.isDone ? 1 : -1;
	});

	return (
		<div className={cl.tasks}>
			<div className={cl.line}></div>
			{userTasks.map(task => <Task task={task} key={task.taskName + task.taskDescription} />)}
		</div>
	);
}

export default TaskList;