import React from "react";
import * as S from "./style";

const RegisterBox = () => {
  return (
    <S.MainWrapper>
      <S.LoginWrapper>
        <S.LoginLabel>ID</S.LoginLabel>
        <S.LoginInput type="text" />
        <S.LoginLabel>password</S.LoginLabel>
        <S.LoginInput type="password" />
        <S.LoginButton>sign in</S.LoginButton>
      </S.LoginWrapper>
      <S.RegisterButton>sign up</S.RegisterButton>
    </S.MainWrapper>
  );
};

export default RegisterBox;
