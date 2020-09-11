import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import * as S from './styles';

const MakeDiaryModal = () => {
	const [error, setError] = useState({
		state: true,
		message: 'Error',
	});

	return (
		<Modal>
			<S.ModalTitle>일기장 생성</S.ModalTitle>
			<S.ModalForm>
				<S.ModalInput error={error.state} placeholder={`일기장 이름`} />
				<S.ModalSubmit type="submit" value="확인" />
			</S.ModalForm>
			{error.state && (
				<S.ModalErrorMessage>{error.message}</S.ModalErrorMessage>
			)}
			<S.ModalMessageForm>
				<S.ModalMessageCol>
					최대 교환가능한 인원은{' '}
					<S.ModalMessageBold>{`3명`}</S.ModalMessageBold> 입니다.
				</S.ModalMessageCol>
				<S.ModalMessageCol>
					일기는
					<S.ModalMessageBold>
						{`코드를 입력하여 들어온 순`}
					</S.ModalMessageBold>{' '}
					으로 교환됩니다.
				</S.ModalMessageCol>
			</S.ModalMessageForm>
		</Modal>
	);
};

export default MakeDiaryModal;
