import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ product }) => {
	// const { title, price } = product;
	console.log("from orderitem", product);
	const { removeFromCart } = useContext(AppContext);
	const handleRemove = product => {
		removeFromCart(product);
	};

	return (
		<div className={styles.OrderItem}>
			<figure>
				<img
					src={product?.images[ 0 ]}
					alt={product?.title}
				/>
			</figure>
			<p>{product?.title}</p>
			<p>${product?.price}</p>
			<img
				className={styles[ "pointer", "more-clickable-area" ]}
				src={close.src} alt="close"
				onClick={() => handleRemove(product)}
			/>
		</div>
	);
};

export default OrderItem;
