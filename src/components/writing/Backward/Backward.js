import React from "react";
import * as S from "./style";
import {useHistory} from "react-router-dom"

const BackwardBtn = () => {
  const history = useHistory();

  const onClickBack = () => {
    history.push("/");
  }
  return(
    <S.BackwardBtn onClick={onClickBack}>
      <S.Img src="/src/asset/diaryWrite/writeBackArrow.png"/>
    </S.BackwardBtn>
  )
};

export default BackwardBtn;
