import React from "react";
import * as S from "./style";

const InputBox = () => {
  return (
    <S.Wrapper>
      <S.Title>코드입력</S.Title>
      <S.ButtonDiv>
        <S.CodeInput placeholder="ex )  3A48YA" disabled />
        <S.Button disabled>확인</S.Button>
      </S.ButtonDiv>
    </S.Wrapper>
  );
};

export default InputBox;
