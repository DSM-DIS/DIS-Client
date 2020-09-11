import React from "react";
import * as S from "./style";

const Header = () => {
  return (
    <S.HeaderBox>
      <S.Logo>DIS</S.Logo>
      <S.HeaderBtn>로그아웃</S.HeaderBtn>
      <S.HeaderBtn>코드입력</S.HeaderBtn>
    </S.HeaderBox>
  );
};

export default Header;
