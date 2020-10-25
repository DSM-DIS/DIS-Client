import React from 'react';
import FooterContainer from './FooterContainer/FooterContainer';
import HeaderContainer from './HeaderContainer/HeaderContainer';
import DrawerContainer from './DrawerContainer/DrawerContainer';
const MainContainer = () => {
	return (
		<>
			{/* <Main /> */}
			<HeaderContainer />
			<DrawerContainer />
			<FooterContainer />
		</>
	);
};

export default MainContainer;
