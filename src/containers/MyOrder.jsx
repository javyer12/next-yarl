import React, { useContext } from 'react';
import Image from "next/image";
import OrderItem from '@components/OrderItem';
import AppContext from '../context/AppContext';
import styles from '@styles/MyOrder.module.scss';
import arrow from '@icons/flechita.svg';

const MyOrder = () => {
	const { state, toggleOrder } = useContext(AppContext);
	// console.log(state.cart);
	// const { cart } = state;
	// console.log(" destructuting #1:  ", typeof (cart));
	// const ob = Object.values(cart);
	// console.log(ob);
	// const { title, price } = cart;
	// console.log(" destructuting: ", title, price);
	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className={styles.MyOrder}>
			<div className={styles[ "MyOrder-container" ]}>
				<div className={styles[ "title-container" ]}>
					<Image className={`${styles[ "more-clickable-area" ]} ${styles.pointer}`} src={arrow} alt="arrow" onClick={() => toggleOrder()} />
					<p className={styles.title}>My order</p>
				</div>
				<div className={styles[ "my-order-content" ]}>
					<div className={styles[ "my-orders" ]}>
						{state.cart.map((product) => (
							<OrderItem product={product} key={`orderItem-${product.id}`} />
						))}
					</div>
					<div className={styles[ "order" ]}>
						<p>
							<span>Total</span>
						</p>
						<p>${sumTotal()}</p>
					</div>
					<a href="/checkout">
						<button className={styles[ "primary-button" ]}>Checkout</button>
					</a>
				</div>
			</div>
		</aside>
	);
}

export default MyOrder;
