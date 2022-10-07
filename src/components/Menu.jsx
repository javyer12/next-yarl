import React, { useContext } from 'react';
import AppContext from 'context/AppContext';
import Link from 'next/link';
import styles from "@styles/Menu.module.scss";

const Menu = () => {
	const { state, toggleOrder } = useContext(AppContext);

	return (
		<div className={styles.Menu}>
			<ul>
				<li>
					<button href="/" className="title" onClick={() => toggleOrder()}>My orders</button>
				</li>
				<li>
					<Link href="/">My account</Link>
				</li>
				<li>

					{state.isSigned ? <Link href="/">Sign Out</Link> : <div className={styles.sign}><Link href="/login">Sign In    </Link><Link href="/signup">Sign Up</Link></div>}
				</li>
			</ul>
		</div>
	);
};

export default Menu;
