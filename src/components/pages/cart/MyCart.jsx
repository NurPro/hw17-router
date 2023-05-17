import React from 'react';
import styled from 'styled-components';
import GoBackButton from '../../go-back/goBack';
const macBook = [
	{
		id: 1,
		url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfLU0naWzbfGgzqViSEiUjy1UB9QEGrvRuQvbJAXBSMtEQx8RbZbPMkF3n_HV1SreoEac&usqp=CAU',
		productName: 'Macbook Pro',
		price: '1420',
	},
	{
		id: 2,
		url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfVvN9FsQDYehBseN2H28K0a7ijeIeSAbHRUn4hJr44aievq-trUvtQV3QEQ0zxmuaXk&usqp=CAU',
		productName: 'Macbook Pro',
		price: '920',
	},
	{
		id: 3,
		url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZv1xsWJKr5yiX794g6AduPDCBRUPvH27lQuXEoTOVUcJms_ZfDEGIKV0X3XtetVtUlYk&usqp=CAU',
		productName: 'Macbook Pro',
		price: '1200',
	},
	{
		id: 4,
		url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQNikdU4ENOFRiWen6J7TUDk7awU8Zl65rN0vUm6TdA9YkDIDFGRqBdQ41ya-_LJQG-UM&usqp=CAU',
		productName: 'Macbook Pro',
		price: '1000',
	},
];
export const MyCart = () => {
	return (
		<Container>
			{macBook.map((el) => {
				return (
					<Block key={el.id}>
						<img src={el.url} alt='' />

						<h3>{el.productName}</h3>
						<h4>${el.price}</h4>
						<Buttons>submit</Buttons>
					</Block>
				);
			})}
      <GoBackButton/>
      </Container>
	);
};
const Container = styled.div`
	width: 100%;
	height: 89vh;
	background-color: #b4b4e9;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	gap: 30px;
`;

const Block = styled.div`
	width: 350px;
	height: 350px;
	border: 2px solid #000;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px;
	border-radius: 8px;

	h3 {
		margin: 15px 0;
	}
`;
const Buttons = styled.button`
	width: 80px;
	height: 30px;
	background-color: #f8e2ba;
border: none;
color: #775a5a;
  border-radius: 6px;
	margin: 10px 0;
`;
