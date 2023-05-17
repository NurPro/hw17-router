import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = () => {
	return (
		<HeaderSt>
			<div>
				<h1>IStore</h1>
			</div>
			<div>
				<NaviLink to='/products'>products</NaviLink>
				<NaviLink to='/myCart'>myCart</NaviLink>
				<NaviLink to='/myOrder'>myOrder</NaviLink>
			</div>
		</HeaderSt>
	);
};

const HeaderSt = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: aliceblue;
	background-color: rgb(20, 99, 169);
	font-size: 16px;
	padding: 0px 20px;
	text-decoration: none;
`;
const NaviLink = styled(NavLink)`
	color: aliceblue;
	font-size: 25px;
	text-decoration: none;
	margin-right: 28px;
	padding-bottom: 2px;
	text-decoration: none;
	font-weight: 600;
	padding-bottom: 5px;
	transition: border-bottom 0.3s ease;

	&.active {
		color: rgb(114, 124, 131);
		border-bottom: 1px solid rgb(156, 160, 163);
	}
`;

/*   div {
	 a {
		color: aliceblue;
		font-size: 25px;
		text-decoration: none;
		margin-right: 28px;
		padding-bottom: 2px;
		text-decoration: none;
		font-weight: 600;

		&.active {
		  color: rgb(156, 160, 163);
		  border-bottom: 1px solid rgb(156, 160, 163);
		}
	 }
  } */
