import React, { useContext } from 'react';
import Head from 'next/head';
import OrderItem from '@components/OrderItem';
import AppContext from '../context/AppContext';
import styles from '@styles/Orders.module.scss';

const Orders = ({ product }) => {
        const { state } = useContext(AppContext);
        console.log(state.cart)
        console.log("order");
        return (
                <>
                        <Head>
                                <titile>My Order</titile>
                        </Head>
                        <div className={styles.Orders}>
                                <div className={styles[ "Orders-container" ]}>
                                        <h1 className={styles.title}>My orders</h1>
                                        <div className={styles[ "Orders-content" ]}>
                                                <OrderItem product={product} />
                                        </div>
                                </div>
                        </div>
                </>
        );
}

export default Orders;
