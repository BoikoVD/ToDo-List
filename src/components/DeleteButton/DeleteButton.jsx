import React from 'react';
import { useDispatch } from 'react-redux';
import cl from './DeleteButton.module.scss';
import cn from 'classnames';
import { ReactSVG } from 'react-svg'
import wasteIcon from '../../assets/icons/waste.svg'

const DeleteButton = ({ isDone, task, ...props }) => {
	const dispatch = useDispatch();

	const deleteTask = () => {
		dispatch({ type: "ON_MODAL", onModal: true, modalType: 'deleteTask', task: task });
	}

	return (
		<button
			className={cn(cl.delete, {
				[cl.deleteIsDone]: isDone
			})}
			onClick={deleteTask}
			{...props}
		>
			<ReactSVG src={wasteIcon} />
		</button>
	);
}

export default DeleteButton;