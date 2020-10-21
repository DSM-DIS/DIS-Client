import React from 'react';
import Routing from './Routing';
import { GlobalStyle } from './GlobalStyle';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Routing />
		</BrowserRouter>
	);
};

export default App;
