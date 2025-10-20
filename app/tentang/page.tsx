import styles from '../page.module.css'; 
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami - PT. Payama Digital Solusi',
  description: 'Pelajari lebih lanjut tentang misi, visi, dan tim kami.',
};

export default function TentangPage() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.textContainer}>
          <h1 className={styles.sectionTitle}>Tentang Kami</h1>
          <p>
            Didirikan pada tahun 2024, PT. Payama Digital Solusi adalah sebuah
            agensi digital yang bersemangat dalam memecahkan masalah. Misi kami
            adalah memberdayakan bisnis, baik besar maupun kecil, untuk sukses di
            dunia online dengan menyediakan solusi teknologi yang efektif dan
            mudah digunakan.
          </p>

          <h2>Visi Kami</h2>
          <p>
            Menjadi mitra teknologi terdepan yang mendorong inovasi dan
            pertumbuhan digital bagi setiap klien yang kami layani, menciptakan
            dampak positif melalui solusi yang cerdas dan berfokus pada
            pengguna.
          </p>

          <h2>Misi Kami</h2>
          <ul>
            <li>
              Memberikan layanan pengembangan website dan aplikasi berkualitas
              tinggi.
            </li>
            <li>
              Menciptakan desain UI/UX yang intuitif dan menarik.
            </li>
            <li>
              Menjalin kemitraan jangka panjang dengan klien berdasarkan
              kepercayaan dan hasil.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}