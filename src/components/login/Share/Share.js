import React from "react";
import * as S from "./style";
import WriteDiv from "../../common/WriteDiv/WriteDiv";
import NumberBox from "./NumberBox/NumberBox";
import InputBox from "./InputBox/InputBox";

const slogan = "나 혼자가 아닌 다른 사람들과!";
const title = "코드를 사용하여\n공유 가능한 일기";
const explanation =
  "코드 번호로 언제든 다른 사람과 나의 일기장을\n공유할 수 있습니다. 다른 누군가와 함께 일기를 공유해보세요!";

const Share = () => {
  return (
    <S.ShareWrapper>
      <S.ShareLeftWrapper>
        <S.ShareWriteDiv>
          <WriteDiv slogan={slogan} title={title} explanation={explanation} />
        </S.ShareWriteDiv>
      </S.ShareLeftWrapper>
      <S.ShareRightWrapper>
        <NumberBox />
        <InputBox />
      </S.ShareRightWrapper>
    </S.ShareWrapper>
  );
};

export default Share;
