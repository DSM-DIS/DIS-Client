import React, { useState } from "react";
import * as S from "./style";

const Button = ({ code }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <S.ModalOverlay visible={modalVisible} />
      <S.ModalWarpper tabIndex="-1" visible={modalVisible}>
        <S.ModalInner tabIndex="0">
          <S.CloseBtn onClick={closeModal}>X</S.CloseBtn>
          <S.ModalCode>{code}</S.ModalCode>
        </S.ModalInner>
      </S.ModalWarpper>
      <S.Warp>
        <S.Button onClick={openModal}>공유</S.Button>
        <S.Button>교환</S.Button>
      </S.Warp>
    </>
  );
};

export default Button;
