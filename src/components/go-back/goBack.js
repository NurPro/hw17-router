import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const GoBackButton = () => {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};

	return <ButtonGoBack onClick={goBack}>Go Back</ButtonGoBack>;
};

export default GoBackButton;
 


const ButtonGoBack = styled.button`
	width: 120px;
	height: 40px;
	font-size: 500px;
	background-color: #00ffbf;
	color: #fff;
	font-size: 20px;
	font-weight: bold;
	border-radius: 20px;
	margin: 30px 0 0 80px;
`;
