import React, { useState } from 'react';
import Head from 'next/head';
import styles from '@styles/CreateAccount.module.scss';

const CreateAccount = () => {
        const [ user, setUser ] = useState("");
        const createUser = (e) => {
                const inputValue = e.target.value;
                setUser(inputValue);
        };
        console.log(user);
        return (
                <>
                        <Head>
                                <title>Sign Up</title>
                        </Head>
                        <div className={styles.CreateAccount}>
                                <div className={styles[ "CreateAccount-container" ]}>
                                        <h1 className={styles.title}>My account</h1>
                                        <form action="/" className={styles.form}>
                                                <div>
                                                        <label for="name" className={styles.label}>Name</label>
                                                        <input
                                                                type="text"
                                                                id="name"
                                                                placeholder="Teff"
                                                                onChange={createUser}
                                                                className={styles.input} />
                                                        <label for="email" className="label">Email</label>
                                                        <input type="text" id="email" placeholder="platzi@example.com" className={styles.input} />
                                                        <label for="password" className={styles.label}>Password</label>
                                                        <input type="password" id="password" placeholder="*********" className={styles.input} />
                                                </div>
                                                <button type="submit" value="Create" className={styles[ "primary-button" ]} >Create</button>
                                        </form>
                                </div>
                        </div>
                </>
        );
};

export default CreateAccount;
