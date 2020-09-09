import React from "react";
import * as S from "./style";
import RegisterBox from "./RegisterBox/RegisterBox";

const Register = () => {
  return (
    <S.Wrapper>
      <S.LeftWrapper>
        <RegisterBox />
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.Title>
          지금 다른 사람들과
          <br />
          일기를 공유하세요
        </S.Title>
        <S.Explanation>
          다른 사람과 함께 하는 교환일기 서비스
          <br />
          다이스(DIS)와 함께 하세요
        </S.Explanation>
        <S.SignUpButton>가입하기</S.SignUpButton>
      </S.RightWrapper>
    </S.Wrapper>
  );
};

export default Register;
