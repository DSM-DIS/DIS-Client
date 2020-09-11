import React, { useState } from 'react';
import * as S from './styles';
import * as M from '../Modal/styles';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DiaryWrap from './DirayWrap/DirayWrap';
import Modal from '../Modal/Modal';
import CodeModal from './CodeModal/CodeModal';
import MakeDiaryModal from './MakeDiaryModal/MakeDiaryModal';

const onNoModalClick = (event) => {
	event.stopPropagation();
};

const Main = () => {
	const [modal, setModal] = useState({
		code: false,
		diary: false,
	});

	const [error, setError] = useState({
		error: true,
		message: 'error message',
	});

	const onModalClick = (modalState) => {
		if (modalState === 'all') {
			setModal({ code: false, diary: false });
		} else {
			modalState === 'code'
				? setModal({ code: !modal.code, diary: false })
				: setModal({ code: false, diary: !modal.code });
		}
	};

	const checkModal = () => {
		onModalClick('code');
	};

	return (
		<S.Container>
			<Header />
			<S.MainWrap>
				<S.MainHeader>
					<S.MainHeaderText>
						<S.UserName>{`김도희`}</S.UserName>님의 서랍장
					</S.MainHeaderText>
				</S.MainHeader>
				<DiaryWrap />
			</S.MainWrap>
			<Footer />
			{/* {modal && <CodeModal />} */}
			{modal && <MakeDiaryModal />}
		</S.Container>
	);
};

export default Main;
