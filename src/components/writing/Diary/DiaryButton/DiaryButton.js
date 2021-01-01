import React, { useCallback } from "react";
import * as S from "./style";
import {showModal} from "../../../../modules/redux/modal/index"
import { useDispatch } from "react-redux";
import ShareModal from "../../../modal/Modal/ShareModal/ShareModal"

const Button = ({type}) => {
  const dispatch = useDispatch();
	const modalOn = useCallback((Modal) => dispatch(showModal(Modal)), [dispatch]);

  return (
    <>
      <S.Warp>
      {/* type으로 교환 버튼 활성화/비활성화 정한다. */}
        <S.Button onClick={() => modalOn(ShareModal)}>공유</S.Button>
        <S.Button>교환</S.Button>
      </S.Warp>
    </>
  );
};

export default Button;
