// components/Navbar.jsx
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Softcore Studio</h1>
      <ul className={styles.menu}>
        <li><a href="/" className={styles.link}>Home</a></li>
        <li><a href="/services" className={styles.link}>Services</a></li>
        <li><a href="/contact" className={styles.link}>Contact</a></li>
      </ul>
    </nav>
  );
}
