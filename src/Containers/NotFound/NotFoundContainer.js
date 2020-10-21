import React from 'react';
import NotFound from '../../Components/NotFound/NotFound';

const NotFoundContainer = () => {
	alert('Not found page');
	window.location.href = '/main';
	return <NotFound />;
};

export default NotFoundContainer;
