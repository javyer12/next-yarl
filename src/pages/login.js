import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@styles/Login.module.scss';
import logo from '@logos/logo_yard_sale.svg';

const Login = () => {
        const form = useRef(null);

        const handleSubmit = (event) => {
                event.preventDefault();
                const formData = new FormData(form.current);
                const data = {
                        usename: formData.get('email'),
                        password: formData.get('password')
                };
                console.log(data);
        };

        return (
                <div className={styles.Login}>
                        <div className={styles[ "Login-container" ]}>
                                <Image src={logo} alt="logo" className={styles.logo} />
                                <form action="/" className={styles.form} ref={form}>
                                        <label htmlFor="email" className={styles.label}>Email address</label>
                                        <input type="text" name="email" placeholder="platzi@example.cm" className={styles.input} />
                                        <label htmlFor="password" className={styles.label}>Password</label>
                                        <input type="password" name="password" placeholder="*********" className={styles.input} />
                                        <button
                                                onClick={handleSubmit}
                                                className={styles[ "primary-button" ]}>
                                                Log in
                                        </button>
                                </form>
                                <button
                                        className={styles[ "secondary-button" ]}
                                >
                                        Sign up
                                </button>
                                <Link href="/" className={styles[ "forgot-password" ]}>Forgot my password</Link>
                        </div>
                </div >
        );
};

export default Login;
