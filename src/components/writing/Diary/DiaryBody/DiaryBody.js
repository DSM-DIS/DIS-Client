import React from "react";
import Write from "../DiaryWrite/DiaryWrite"
import Read from "../DiaryRead/DiaryRead"
import * as S from "./style";

const DiaryBody = () => {
  return (
    <S.ContentWarpper>
      <S.ContentForm>
        <Write />
        {/* <Read /> */}
      </S.ContentForm>
      <S.ButtonWrapper>
        <S.Button><S.Img src="/src/asset/diaryWrite/writeUpArrow.png"/></S.Button>
        <S.Button><S.Img src="/src/asset/diaryWrite/writeDownArrow.png"/></S.Button>
      </S.ButtonWrapper>
    </S.ContentWarpper>
  );
};

export default DiaryBody;
