import React from "react";
import * as S from "./style";

const CreateBox = () => {
  return (
    <S.Wrapper>
      <S.Title>일기장 생성</S.Title>
      <S.FlexDiv>
        <S.Input placeholder="일기장 이름" disabled />
        <S.Button disabled>확인</S.Button>
      </S.FlexDiv>
    </S.Wrapper>
  );
};

export default CreateBox;
