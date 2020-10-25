import React from 'react';
import * as S from './styles';

const Footer = () => {
	return (
		<S.Container>
			<S.MainAnchorWrap>
				<S.MainAnchor>고객센터</S.MainAnchor>
				<S.MainAnchor>공지사항</S.MainAnchor>
			</S.MainAnchorWrap>
			<S.SubAnchorWrap>
				<S.SubAnchor>개인정보처리방침</S.SubAnchor>
				<S.SubAnchor>저작권보호정책</S.SubAnchor>
				<S.SubAnchor>이용약관</S.SubAnchor>
			</S.SubAnchorWrap>
			<S.SubText>
				(34111)대전광역시 유성구 가정북로 76(장동 23-9)
				대덕소프트웨어마이스터고등학교
			</S.SubText>
		</S.Container>
	);
};

export default Footer;
