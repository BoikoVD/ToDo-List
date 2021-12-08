import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { store } from "./store";

ReactDOM.render(
	<CookiesProvider>
		<Provider store={store}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Provider>
	</CookiesProvider>,
	document.getElementById('root')
);
