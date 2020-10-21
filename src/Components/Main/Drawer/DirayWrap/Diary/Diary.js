import React from 'react';
import * as S from './styles';

const Diary = (props) => {
	const { mode } = props;

	return (
		<S.Container>
			{mode === 'init' ? (
				<>
					<S.DiaryShape mode={mode} />
					<S.DiaryText>{`일기 생성하기`}</S.DiaryText>
				</>
			) : (
				<>
					<S.DiaryShape>{`DIARY`}</S.DiaryShape>
					<S.DiaryText>{`Temp Text`}</S.DiaryText>
				</>
			)}
		</S.Container>
	);
};

export default Diary;
