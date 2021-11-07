import cl from './Textarea.module.scss';

const Textarea = (props) => {
	return (
		<textarea className={cl.textarea} {...props} ></textarea>
	);
}

export default Textarea;