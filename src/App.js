import { useSelector } from 'react-redux';
import cl from './App.module.scss';
import Authorization from "./components/pages/Authorization/Authorization";
import ToDo from './components/pages/ToDo/ToDo';

function App() {
	const isLogined = useSelector(state => state.currentUser.isLogined);

	return (
		<div className={cl.wrapper}>
			{isLogined ? <ToDo /> : <Authorization />}
		</div>
	);
}

export default App;
