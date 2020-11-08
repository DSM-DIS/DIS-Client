import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	width: calc(100% - 100px);
	padding: 50px;
	background: #17202e;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;
