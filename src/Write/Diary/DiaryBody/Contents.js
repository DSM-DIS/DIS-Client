import React from "react";
import * as S from "./style";

const Contents = () => {
  return (
    <S.ContentWarpper>
      <S.ContentBox>
        <S.TextContent />
      </S.ContentBox>
      <S.ButtonWrapper>
        <S.Button>UP</S.Button>
        <S.Button>DOWN</S.Button>
      </S.ButtonWrapper>
    </S.ContentWarpper>
  );
};

export default Contents;
