import cl from './Button.module.scss';
import cn from 'classnames';

const Button = ({ children, color, ...props }) => {
	return (
		<button
			className={cn(cl.myBtn, {
				[cl.red]: color === 'red',
				[cl.white]: color === 'white'
			})}
			{...props}
		>
			{children}
		</button>
	);
}

export default Button;