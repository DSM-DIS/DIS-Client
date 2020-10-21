import React from "react";
import * as S from "./style";

const DiaryHeader = ({ diaryName, userNum }) => {
  return (
    <S.NameBar>
      <S.DiaryName>{diaryName}의 일기장</S.DiaryName>
      <S.UserNum>3명중 {userNum}명</S.UserNum>
    </S.NameBar>
  );
};

export default DiaryHeader;
