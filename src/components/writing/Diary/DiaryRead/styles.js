import styled from "styled-components"
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
	schoolLaptop: '1538px',
	monitor: '1918px'
})

export const Div = styled.div`
  width: 56.25rem;
  height: 28.75rem;
  word-break: break-all;
  word-wrap: normal;
  padding: 1rem;
  margin-top: 1rem;
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
  ${customMedia.greaterThan('monitor')`
      width: 63rem;
  `}
`