import React, { useState } from 'react';
import './App.css';
import Router from './Router';
import MyContext from './context/MyContext';

function App() {
	const MyProvider = () => {
		const [login, setLogin] = useState('');
		const [albumApiResult, setAlbumApiResult] = useState([]);
		const [searchedTerm, setSearchedTerm] = useState('');

		const contextExport = {
			login,
			setLogin,
			albumApiResult,
			setAlbumApiResult,
			searchedTerm,
			setSearchedTerm,
		};

		return (
			<MyContext.Provider value={contextExport}>
				<Router />
			</MyContext.Provider>
		);
	};

	return <div>{MyProvider()}</div>;
}

export default App;
