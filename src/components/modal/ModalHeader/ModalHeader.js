import React from "react";
import * as S from "./styles";

const ModalHeader = (props) => {
	const { text, color, fontSize, fontWeight } = props;

	return (
		<S.Container>
			<S.Text color={color} fontSize={fontSize} fontWeight={fontWeight}>
				{text}
			</S.Text>
		</S.Container>
	);
};

export default ModalHeader;
