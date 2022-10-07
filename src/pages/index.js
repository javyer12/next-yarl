import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ProductList from '@containers/ProductList';
import headIcon from '@logos/logo_yard_sale.svg';

function Home() {
  return (
    <>
      <Head>
        <Image src={headIcon} alt="logo" />
        <title>Funny Shopping</title>
      </Head>
      <ProductList />
    </>
  );
}

export default Home;
