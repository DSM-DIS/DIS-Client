import React from "react";
import * as S from "./styles";

const ModalFormBtn = (props) => {
	const { text, btnClick, width, height, color, fontSize, fontWeight, background } = props;

	return (
		<S.Container
			onClick={btnClick}
			width={width}
			height={height}
			color={color}
			fontSize={fontSize}
			fontWeight={fontWeight}
			background={background}>
			{text}
		</S.Container>
	);
};

export default ModalFormBtn;
