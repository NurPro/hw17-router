import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MyCart } from '../pages/cart/MyCart';
import { MyOrder } from '../pages/order/MyOrder';
import { Products } from '../pages/products/Products';
// import { NotFounds } from '../pages/NorFounds';
import { MoreIn } from '../pages/MoreIn';

export const Router = () => {
	return (
		<Routes>
			<Route  path='/products' element={<Products />} />
			<Route path='/products/:id/details' element={<MoreIn />} />

			<Route path='/myCart' element={<MyCart />} />
			<Route path='/myOrder' element={<MyOrder />} />
			<Route path='/myOrder' element={<MyOrder />} />
 		</Routes>
	);
};
