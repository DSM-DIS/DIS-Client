import React from "react";
import * as S from "./style";

const WriteDiv = props => {
  const { slogan, title, explanation } = props;

  return (
    <S.WriteDiv>
      <S.Slogan>{slogan}</S.Slogan>
      <S.Title>{title}</S.Title>
      <S.Explanation>{explanation}</S.Explanation>
    </S.WriteDiv>
  );
};

export default WriteDiv;
