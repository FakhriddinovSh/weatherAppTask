import styled from 'styled-components';

export const Sidebar = styled.div`
	width: 17vw;
	height: 91vh;
	padding-top: 20px;
	background: #1976d2;
`;

export const Main = styled.div`
	display: flex;
`;

export const WeatherWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 80%;
	padding: 20px;
`;

export const InfoList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`;
export const InfoItem = styled.li``;
export const WeatherCountWrap = styled.p`
	font-weight: bold;
	font-size: 28px;
`;
export const WeatherCount = styled.span`
	font-weight: bold;
	font-size: 48px;
`;
export const InfoDesc = styled.p`
	font-weight: bold;
	font-size: 24px; ;
`;
export const InfoCount = styled.span`
	font-size: 20px; ;
`;
