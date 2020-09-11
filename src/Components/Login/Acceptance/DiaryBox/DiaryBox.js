import React from "react";
import * as S from "./style";
import { MdAdd } from "react-icons/md";

const DiaryBox = () => {
  return (
    <S.DiaryBox>
      <S.EachDiaryBox>
        <S.CreateDiary>
          <MdAdd size={50} />
        </S.CreateDiary>
        <S.DiaryExplanation>일기 생성하기</S.DiaryExplanation>
      </S.EachDiaryBox>
      <S.EachDiaryBox>
        <S.Diary>DIARY</S.Diary>
        <S.DiaryExplanation>모두의 일기장</S.DiaryExplanation>
      </S.EachDiaryBox>
      <S.EachDiaryBox>
        <S.Diary>DIARY</S.Diary>
        <S.DiaryExplanation>모두의 일기장</S.DiaryExplanation>
      </S.EachDiaryBox>
    </S.DiaryBox>
  );
};

export default DiaryBox;
