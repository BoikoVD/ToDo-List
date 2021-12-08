import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import cl from './App.module.scss';
import Authorization from "./pages/Authorization/Authorization";
import ToDo from './pages/ToDo/ToDo';

function App() {
	const isLogined = useSelector(state => state.currentUser.isLogined);
	const dispatch = useDispatch();
	const [cookies, setCookie, removeCookie] = useCookies();

	React.useEffect(() => {
		if (cookies.user) {
			dispatch({ type: "IS_LOGINED", isLogined: true, userName: cookies.user, tasks: [] });
			axios.post('/login', { userName: cookies.user }).then((res) => {
				dispatch({ type: "MODIFY_TASKS", tasks: res.data.tasks });
			});
		}
	}, []);

	return (
		<div className={cl.wrapper}>
			{isLogined ? <ToDo removeCookie={removeCookie} /> : <Authorization setCookie={setCookie} />}
		</div>
	);
}

export default App;
