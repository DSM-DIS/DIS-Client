import React from 'react';
import * as S from './styles';
import Diary from './Diary/Diary';

const DirayContainer = () => {
	return (
		<S.Container>
			<Diary mode={'init'} />
			<Diary />
			<Diary />
			<Diary />
			<Diary />
			<Diary />
		</S.Container>
	);
};

export default DirayContainer;
