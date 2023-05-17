import React from 'react';
import styled from 'styled-components';
import GoBackButton from '../../go-back/goBack';
export const MyOrder = () => {
	return (
		<Container>
			<ContainerBlock>
				<ContainerText>
					<h1>
						Рассчитайте стоимость <br /> самого{' '}
						<span>
							выгодного <br /> предложения
						</span>{' '}
						от фабрики <br /> «Мир Матрацев» прямо сейчас
					</h1>
					<p>Ответьте на несколько вопросов и получите:</p>
					<Block>
						<p>
							<h3>01</h3>Расчет стоимости <br /> матраца или кровати
						</p>
						<p>
							<h3>02</h3>Каталог лучших <br /> изделий фабрики
						</p>
						<p>
							<h3>03</h3>Консультацию наших <br /> ведущих специалистов
						</p>
					</Block>
					<div>
						<GoBackButton />
						<Buttons>рассчитать</Buttons>
					</div>
				</ContainerText>
				<img
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYDAaNNcn2xE_FkrgAiU6AwRCul_uj4qd1XQ&usqp=CAU'
					alt=''
				/>
			</ContainerBlock>
		</Container>
	);
};
const Container = styled.div`
	width: 100%;
	height: 89vh;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const ContainerBlock = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 100px;
	margin-top: 50px;
	img {
		width: 500px;
		height: 400px;
	}
`;
const ContainerText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
	h1,
	span {
		font-style: normal;
		font-weight: 600;
		font-size: 37px;
		text-transform: uppercase;
		color: #000000;
	}
	span {
		color: #0eccdd;
	}
	div {
		display: flex;
		align-items: center;
		gap: 30px;
	}
`;
const Block = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
`;

const Buttons = styled.button`
	width: 236px;
	height: 46px;
	background: #0eccdd;
	border: 3px solid #0eccdd;
	border-radius: 20px;
	font-weight: 600;
	font-size: 30px;
	text-transform: uppercase;
	color: #ffffff;
`;
