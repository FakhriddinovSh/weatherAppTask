import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LoginRightWrapper = styled.div`
	width: 50%;
	height: 100vh;
	margin: 0 auto;
	padding-top: 75px;
	padding-right: 134px;
	padding-bottom: 136px;
	padding-left: 112px;
	background-color: '#191919';
`;

export const LoginTitle = styled.h2`
	margin: 0;
	margin-bottom: 10px;
	font-weight: 600;
	font-size: 36px;
	line-height: 51px;
	text-align: center;
	color: '#000';
`;

export const LoginDescriptionLink = styled(NavLink)`
	margin: 0;
	margin-left: 10px;
	font-size: 13px;
	line-height: 15px;
	color: #549ff9;
	text-decoration: none;
`;

export const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const LoginInput = styled.input`
	position: relative;
	margin-top: ${(props) => (props.top ? '21px' : '')};
	margin-bottom: ${(props) => (props.bottom ? '34px' : '16px')};
	padding: 16px 0;
	padding-left: 16px;
	font-size: 14px;
	line-height: 16px;
	color: #aaaaaa;
	background: ${(props) => (props.theme === 'dark' ? 'transparent' : '#fff')};
	border: 1px solid #b4b4bb;
	border-radius: 10px;
`;

export const LoginButton = styled.button`
	padding: 10px 0;
	font-weight: 700;
	font-size: 18px;
	line-height: 36px;
	text-align: center;
	color: #fff;
	background: #152540;
	border-radius: 99px;
	border: none;
`;

export const LoginErrorSpan = styled.p`
	margin: 0;
	padding: 0;
	color: red;
	font-size: 12px;
`;
