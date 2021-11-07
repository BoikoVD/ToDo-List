import React from 'react';
import { useDispatch } from 'react-redux';
import cl from './DeleteTaskButton.module.scss';
import { ReactSVG } from 'react-svg'

const DeleteTaskButton = ({ isDone, task, ...props }) => {
	const dispatch = useDispatch();

	const clickOnDeleteTask = () => {
		dispatch({ type: "ON_MODAL", onModal: true, modalType: 'deleteTask', task: task });
	}

	return (
		<button
			className={isDone ? [cl.delete, cl.deleteDone].join(' ') : [cl.delete, cl.deleteNotDone].join(' ')}
			onClick={() => { clickOnDeleteTask() }}
			{...props}
		>
			<ReactSVG src="img/icons/waste.svg" className="svg" />
		</button>
	);
}

export default DeleteTaskButton;