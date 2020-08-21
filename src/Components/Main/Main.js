import React from 'react';
import * as S from './styles';
import * as M from '../Modal/styles';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DirayContainer from './DirayContainer/DirayContainer';
import Modal from '../Modal/Modal';
const Main = () => {
	return (
		<S.Container>
			<Header />
			<S.MainWrap>
				<S.MainHeader>
					<S.MainHeaderText>
						<S.UserName>{`김도희`}</S.UserName>님의 서랍장
					</S.MainHeaderText>
				</S.MainHeader>
				<DirayContainer />
			</S.MainWrap>
			<Footer />
			<Modal>
				<M.MainModal></M.MainModal>
			</Modal>
		</S.Container>
	);
};

export default Main;
