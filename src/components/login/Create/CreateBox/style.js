import styled from "styled-components";

export const Wrapper = styled.div`
  width: 500px;
  height: 300px;
  background-color: #ffffff;
  margin-right: 100px;
  border: 1px solid #b7b4b4;
  border-radius: 20px;
  box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1``;

export const FlexDiv = styled.div`
  display: flex;
  margin-bottom: 40px;
  margin-top: 20px;
`;

export const Input = styled.input`
  width: 300px;
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
