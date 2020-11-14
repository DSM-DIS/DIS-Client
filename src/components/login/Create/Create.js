import React from "react";
import * as S from "./style";
import CreateBox from "./CreateBox/CreateBox";
import WriteDiv from "../../common/WriteDiv/WriteDiv";

const slogan = "다른 것 하나 필요없이";
const title = "이름만으로 생성 가능";
const explanation =
  "간단해진 생성 방식으로 빠르게 교환일기를 만들 수 있습니다.";

const Create = () => {
  return (
    <S.CreateWrapper>
      <S.CreateLeftWrapper>
        <CreateBox />
      </S.CreateLeftWrapper>
      <S.CreateRightWrapper>
        <WriteDiv slogan={slogan} title={title} explanation={explanation} />
      </S.CreateRightWrapper>
    </S.CreateWrapper>
  );
};

export default Create;
