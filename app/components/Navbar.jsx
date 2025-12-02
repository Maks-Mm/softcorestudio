// app/components/Navbar.jsx

import Link from 'next/link';
import styles from './Navbar.module.css';


export default function Navbar() {
return (
<nav className={styles.navbar}>
<div className={styles.logoWrapper}>
<div className={styles.avatar}></div>
<span className={styles.logo}>Softcore Studio</span>
</div>


<ul className={styles.menu}>
<li>
<Link className={styles.link} href="/">Home</Link>
</li>
<li>
<Link className={styles.link} href="/services">Services</Link>
</li>
<li>
<Link className={styles.link} href="/contact">Contact</Link>
</li>
</ul>
</nav>
);
}
