import React from 'react';
import * as S from './styles';

const NotFound = () => {
	return (
		<S.Container>
			<S.ErrorWrap>
				<S.MainText>404</S.MainText>
				<S.SubText>Page Not Found</S.SubText>
			</S.ErrorWrap>
		</S.Container>
	);
};

export default NotFound;
