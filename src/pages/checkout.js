import React, { useContext } from 'react';
import Head from 'next/head';
import OrderItem from '@components/OrderItem';
import AppContext from '../context/AppContext';

import styles from '@styles/Checkout.module.scss';

const Checkout = ({ product }) => {
  const { state } = useContext(AppContext);
  console.log(state);
  console.log('from checkout:', product);
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles.Checkout}>
        <div className={styles['Checkout-container']}>
          <h1 className={styles.title}>My order</h1>
          <div className={styles['Checkout-content']}>
            <div className={styles.order}>
              <p>
                <span>03.25.21</span>
                <span>18 articles</span>
              </p>
              <p>$560.00</p>
            </div>
          </div>
          <OrderItem product={product} />
        </div>
      </div>
    </>
  );
};

export default Checkout;
