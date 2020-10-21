import styled from "styled-components";

export const Wrapper = styled.div`
  width: 550px;
  height: 270px;
  border: 1px solid #acacac;
  position: relative;
  top: -75px;
  left: 200px;
  z-index: 100;
  background-color: #ffffff;
  box-shadow: 6px 8px 10px 1px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 45px;
`;

export const ButtonDiv = styled.div`
  display: flex;
  margin-top: 50px;
`;

export const CodeInput = styled.input`
  width: 350px;
  height: 40px;
  margin-right: 30px;
  border: none;
  border-radius: 10px;
  background-color: #f3f3f3;
  &::placeholder {
    font-size: 15px;
    font-weight: bold;
    color: #c6c6c6;
    padding-left: 10px;
  }
`;

export const Button = styled.button`
  width: 70px;
  height: 42px;
  border: none;
  border-radius: 10px;
  background-color: #8b8b8b;
  color: #ffffff;
`;
