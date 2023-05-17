import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MapProducts from './productsItem/productsItemMap';
import GoBackButton from './../../go-back/goBack';
import { Submit } from '../../submit-btn/Submit';
// import MapProductsItem from './ProductsMap';

export const Products = () => {
	return (
		<Div>
			<Container>
				{MapProducts.map((item, index) => (
					<ProductContainer key={index}>
						<Link to={`${item.id}/details`}>
							<ProductImage src={item.img} alt={item.title} />
							<Submit />
						</Link>
						<ConIn>
							<p>{item.title}</p>
							<p>{item.amount}</p>
							</ConIn>
							<br/>
					</ProductContainer>
				))}
			</Container>
			<GoBackButton />
		</Div>
	);
};

const Div = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
<<<<<<< HEAD
	height: 89vh;
=======
	height: 100%;
>>>>>>> 4c058a9f93be1c78dab8a4d8604dcd4e9a3ce62c
	background-color: #7373e7;
	text-decoration: none;
`;

const Container = styled.div`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	align-items: center;
	margin-top: 100px;
`;

const ProductContainer = styled.div`
	width: 300px;
<<<<<<< HEAD
	height: 532px;
=======
	height: 457px;
>>>>>>> 4c058a9f93be1c78dab8a4d8604dcd4e9a3ce62c
	/* border: 2px solid #000; */
	background-color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	padding: 10px;
	border-radius: 8px;
	margin-bottom: 20px;
	-webkit-box-shadow: 0px -2px 22px 8px rgba(255, 0, 0, 0.2) inset;
	-moz-box-shadow: 0px -2px 22px 8px rgba(255, 0, 0, 0.2) inset;
	box-shadow: 0px -2px 22px 8px rgba(255, 0, 0, 0.2) inset;
	div {
<<<<<<< HEAD
		color: #ffa218;
		margin-top: 37px;

		p {
			margin-bottom: 0;
			/* color: red; */
=======
		margin-top: 5px;

		p {
			margin-bottom: 0;
>>>>>>> 4c058a9f93be1c78dab8a4d8604dcd4e9a3ce62c
		}
	}
`;

const ProductImage = styled.img`
	/* max-width: 100%; */
	width: 276px;
	height: 230px;
<<<<<<< HEAD
	padding:24px
=======
	margin:0px, 10px;
>>>>>>> 4c058a9f93be1c78dab8a4d8604dcd4e9a3ce62c
`;

const ConIn = styled.div`
	color: black;
	font-weight: 900;
	font-size: 30px;
`;
