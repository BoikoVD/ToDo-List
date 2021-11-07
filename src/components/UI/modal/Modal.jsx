import React from 'react';
import cl from './Modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import AddTask from '../addTaskForm/AddTask';
import DeleteTask from '../deleteTaskForm/DeleteTask';

function Modal() {
	const dispatch = useDispatch();
	const modal = useSelector(state => state.modal.onModal);
	const modalType = useSelector(state => state.modal.modalType);

	const closeModal = () => {
		dispatch({ type: "CLOSE_MODAL", onModal: false });
	}

	return (
		<div className={modal ? [cl.modal, cl.active].join(' ') : cl.modal} onClick={closeModal}>
			<div className={cl.content} onClick={(e) => { e.stopPropagation() }}>
				{(modalType === 'addTask') ? <AddTask /> : (modalType === 'deleteTask') ? <DeleteTask /> : ''}
			</div>
		</div>
	);
}

export default Modal;