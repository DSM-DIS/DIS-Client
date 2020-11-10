import styled from "styled-components"

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