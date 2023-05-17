import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = () => {
	return (
		<HeaderSt>
			<div>
				<h1>IStore</h1>
			</div>
			<div>
				<Link to='/products'>products</Link>
				<Link to='/myCart'>myCart</Link>
				<Link to='/myOrder'>myOrder</Link>
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
	padding: 0px  20px;
	text-decoration: none;

	div {
		a {
			color: aliceblue;
			font-size: 16px;
			text-decoration: none;
			margin-right: 28px;
			padding-bottom: 2px;
			text-decoration: none;

			&.active {
				color: rgb(156, 160, 163);
				border-bottom: 1px solid rgb(156, 160, 163);
			}
		}
	}
`;
