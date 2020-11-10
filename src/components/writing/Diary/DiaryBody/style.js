import styled from "styled-components";

export const ContentWarpper = styled.div`
  display: flex;
  display: flex;
  width: 1100px;
  height: 460px;
  margin: 0 auto;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

export const ContentForm = styled.form`
  display: flex;
  width: 900px;
  height: 460px;
  background: #fff;
  border: solid 1px #a8a7a7;
  box-shadow: 5px 5px 10px rgba(93, 93, 93, 0.2);
  margin: 0 auto;
  margin-right: -1px;
  justify-content: center;
  align-items: center;
`;

export const TextContent = styled.textarea`
  width: 50rem;
  height: 22.5rem;
  font-size: 1.3rem;
  border: none;
  outline: none;
  resize: none;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 0.1875rem;
    background-color: #ffe3e3;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0.1875rem;
    background-color: #ff9d9d;
  }
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 6.25rem;
  height: 12.5rem;
`;

export const Button = styled.button`
  width: 3.125rem;
  height: 3.125rem;
  border: none;
  outline: none;
  cursor: pointer;
  background: #fff;
  margin-left: 4rem;
`;

export const Img = styled.img`
  width: 3.125rem;
  height: 3.125rem
`