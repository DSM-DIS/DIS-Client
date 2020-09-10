import React, { Fragment } from "react";
import HeaderContainer from "./Header/HeaderContainer";
import BackwardContainer from "./Backward/BackwardContainer";
import DiaryHeaderContainer from "./DiaryHeader/DiaryHeaderContainer";
import DiaryBodyContainer from "./DiaryBody/DiaryBodyContainer";
import DiaryButtonContainer from "./DiaryButton/DiaryButtonContainer";
import DiaryUserContainer from "./DiaryUser/DiaryUserContainer";

const WritingContainer = () => {
  return (
    <Fragment>
      <HeaderContainer />
      <BackwardContainer />
      <DiaryHeaderContainer />
      <DiaryBodyContainer />
      <DiaryUserContainer />
      <DiaryButtonContainer />
    </Fragment>
  );
};

export default WritingContainer;
