import React from "react";
import * as S from "./styles";

const ModalHeader = (props) => {
	const { text, color, font_size, font_weight } = props;

	return (
		<S.Container>
			<S.Text color={color} font_size={font_size} font_weight={font_weight}>
				{text}
			</S.Text>
		</S.Container>
	);
};

export default ModalHeader;
