import React from "react";
import * as S from "./style";
import DiaryBox from "./DiaryBox/DiaryBox";
import WriteDiv from "../../common/WriteDiv/WriteDiv";

const slogan = "빠르게 찾는 나의 일기장";
const title = "간편한 일기 수납 형식";
const explanation =
  "메인 화면에 본인의 일기장을 한눈에 보여주기 때문에\n일기장을 추가해도 손쉽게 확인이 가능합니다.";

const Acceptance = () => {
  return (
    <S.Wrapper>
      <S.LeftWrapper>
        <WriteDiv slogan={slogan} title={title} explanation={explanation} />
      </S.LeftWrapper>
      <S.RightWrapper>
        <DiaryBox />
      </S.RightWrapper>
    </S.Wrapper>
  );
};

export default Acceptance;
