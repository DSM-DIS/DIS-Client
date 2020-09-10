import React from "react";
import * as S from "./style";

const CurrentUser = ({ user }) => {
  return <S.User>현재 {user}님이 소유 중</S.User>;
};

export default CurrentUser;
