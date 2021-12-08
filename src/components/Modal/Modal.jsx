import React from 'react';
import cl from './Modal.module.scss';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import DeleteTaskForm from '../DeleteTaskForm/DeleteTaskForm';

function Modal() {
	const dispatch = useDispatch();
	const onModal = useSelector(state => state.modal.onModal);
	const modalType = useSelector(state => state.modal.modalType);

	const closeModal = () => {
		dispatch({ type: "CLOSE_MODAL", onModal: false });
	}

	return (
		<div onClick={closeModal} className={cn(cl.modal, {
			[cl.active]: onModal
		})} >
			<div className={cl.content} onClick={(e) => { e.stopPropagation() }}>
				{(modalType === 'addTask') ? <AddTaskForm /> : (modalType === 'deleteTask') ? <DeleteTaskForm /> : ''}
			</div>
		</div>
	);
}

export default Modal;