import classes from './Input.module.scss';
import cn from 'classnames';

const Input = ({ className, ...props }) => {
	return (
		<input className={cn(classes.myInput, className)} {...props} />
	);
}

export default Input;