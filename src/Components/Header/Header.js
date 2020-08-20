import React from 'react';
import * as S from './styles';

const Header = () => {
	return (
		<S.Container>
			<S.HeaderLogo>DIS</S.HeaderLogo>
			<S.HeaderButtonWrap>
				<S.HeaderButton>{`코드입력`}</S.HeaderButton>
				<S.HeaderButton>{`로그아웃`}</S.HeaderButton>
			</S.HeaderButtonWrap>
		</S.Container>
	);
};

export default Header;
