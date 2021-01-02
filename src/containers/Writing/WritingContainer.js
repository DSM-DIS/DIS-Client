import React, { Fragment } from 'react';
import HeaderContainer from './Header/HeaderContainer';
import BackwardContainer from './Backward/BackwardContainer';
import DiaryHeaderContainer from './DiaryHeader/DiaryHeaderContainer';
import DiaryBodyContainer from './DiaryBody/DiaryBodyContainer';
import DiaryButtonContainer from './DiaryButton/DiaryButtonContainer';
import DiaryUserContainer from './DiaryUser/DiaryUserContainer';

const WritingContainer = () => {
	return (
		<Fragment>
			<div style={{background:'#fff5fa', height:'100%'}}>
				<HeaderContainer />
				<BackwardContainer />
				<DiaryHeaderContainer />
				<DiaryBodyContainer />
				<DiaryUserContainer />
				<DiaryButtonContainer />
			</div>
		</Fragment>
	);
};

export default WritingContainer;
