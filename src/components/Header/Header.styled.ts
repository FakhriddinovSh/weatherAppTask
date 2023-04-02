import styled from 'styled-components';

export const HeaderSearchOption = styled.ul`
	display: ${(props) => (props.display === 'true' ? 'block' : 'none')};
	position: absolute;
	top: 40px;
	left: 0;
	width: 100%;
	border: none;
	margin: 0;
	padding: 0;
	list-style: none;
	text-align: center;
`;
export const HeaderSearchOptionItem = styled.li`
	background: #fff;
	color: #000;
	border: 1px solid #ddd;
	padding: 10px;
	cursor: pointer;
`;
