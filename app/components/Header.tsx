import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          PT. Payama Digital Solusi
        </Link>
        <nav className={styles.nav}>
          <a href="/tentang">Tentang Kami</a>
          <a href="#services">Layanan</a>
          <a href="#contact">Kontak</a>
        </nav>
      </div>
    </header>
  );
}