import React from 'react';
import MapProductsItem from './products/ProductsMap';
import { useParams } from 'react-router-dom';
import GoBackButton from '../go-back/goBack';
import styled from 'styled-components';

export const MoreIn = () => {
	const { id } = useParams();

	return (
		<div>
			<Container>
				{MapProductsItem.map((item) => {
               return (
                  +id === item.id && (
						<Block>
							<ImgL src={item.img} alt='' />
							<BlockCard>
								<h1>{item.title}</h1>
								<h3>${item.amount}</h3>
                           <p>{item.info}</p>
                           <GoBackButton/>
							</BlockCard>
						</Block>
					));
				})}


			</Container>

		</div>
	);
};


const Container = styled.div`
	width: 100%;
	height: 89vh;
	background-color: #333;
	display: flex;
	justify-content: center;
	align-items: center;
	/* background-image: ; */
	background-repeat: no-repeat;
	background-size: cover;
`;

const Block = styled.div`
	width: 60%;
	height: 40%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 50px;
	border: 2px solid #fff;
	background-color: rgba(255, 255, 255, 0.2);
	padding: 20px 20px 20px 10px;
`;

const BlockCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	h1 {
		color: #fff;
	}
	h3 {
		color: #fff;
		margin-top: 10px;
	}
	p {
		color: #fff;
		margin-top: 10px;
	}
`;

const ImgL = styled.img`
width: 290px;
height: 290px;
`
