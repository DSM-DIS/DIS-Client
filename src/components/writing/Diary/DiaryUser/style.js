import styled from "styled-components";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
	schoolLaptop: '1538px',
	monitor: '1918px'
})

export const User = styled.div`
  float: right;
  margin-top: 12px;
  margin-right: 320px;
  font-size: 10pt;
  ${customMedia.greaterThan('monitor')`
    margin-right: 420px;
  `}
`;
