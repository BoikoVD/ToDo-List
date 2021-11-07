import cl from './TaskCheckbox.module.scss';

function TaskCheckbox({ isDone, clickOnCheckbox, ...props }) {


	return (
		<button {...props} className={isDone ? [cl.check, cl.checkDone].join(' ') : [cl.check, cl.checkNotDone].join(' ')} onClick={clickOnCheckbox}>

		</button>
	);
}

export default TaskCheckbox;