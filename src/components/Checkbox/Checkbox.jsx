import cl from './Checkbox.module.scss';
import cn from 'classnames';

function Checkbox({ isChecked, ...props }) {

	return (
		<button {...props} className={cn(cl.check, {
			[cl.checkIsDone]: isChecked
		})}>

		</button>
	);
}

export default Checkbox;