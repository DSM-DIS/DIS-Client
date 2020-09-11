import styled from "styled-components";

export const Warp = styled.div`
  clear: both;
  display: flex;
  width: 900px;
  margin: 0 auto;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 116px;
  height: 40px;
  border: solid 3px #ff9d9d;
  border-radius: 11px;
  background: white;
  color: #ff9d9d;
  font-weight: bold;
  margin-top: 10px;
  outline: none;
  cursor: pointer;

  &:hover {
    background: #ff9d9d;
    color: white;
    transition: 0.3s;
  }
`;

export const ModalWarpper = styled.div`
  box-sizing: border-box;
  display: ${props => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

export const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${props => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
`;

export const ModalInner = styled.div`
  display: flex;
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 20px;
  width: 360px;
  height: 200px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
  justify-content: center;
  align-items: center;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const ModalCode = styled.div`
  font-size: 30pt;
  font-weight: bold;
`;
