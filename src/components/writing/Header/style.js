import styled from "styled-components";

export const HeaderBox = styled.nav`
  display: flex;
  background: white;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 64px;
  flex-direction: row-reverse;
  align-items: center;
`;

export const Logo = styled.div`
  position: absolute;
  left: 16px;
  color: #ff9d9d;
  font-size: 48px;
  font-weight: bold;
`;

export const HeaderBtn = styled.button`
  width: 104px;
  height: 40px;
  border: solid 4px #ff9d9d;
  border-radius: 48px;
  background: white;
  color: #ff9d9d;
  font-weight: bold;
  margin-right: 20px;
  outline: none;
  cursor: pointer;

  &:hover {
    background: #ff9d9d;
    color: white;
    transition: 0.3s;
  }
`;
