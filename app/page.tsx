import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Solusi Teknologi Inovatif untuk Bisnis Anda
          </h1>
          <p className={styles.heroSubtitle}>
            Kami membantu perusahaan bertransformasi digital melalui pengembangan
            website modern, aplikasi mobile, dan desain yang berfokus pada
            pengguna.
          </p>
          <a href="#services" className={styles.ctaButton}>
            Pelajari Layanan Kami
          </a>
        </div>
      </section>

      {/* 2. TENTANG KAMI */}
      <section id="about" className={styles.section}>
        <h2 className={styles.sectionTitle}>Tentang Kami</h2>
        <p>
          Didirikan pada tahun 2024, PT. Payama Digital Solusi adalah sebuah agensi
          digital yang bersemangat dalam memecahkan masalah. Misi kami adalah
          memberdayakan bisnis, baik besar maupun kecil, untuk sukses di dunia
          online dengan menyediakan solusi teknologi yang efektif dan mudah
          digunakan.
        </p>
      </section>

      {/* 3. LAYANAN KAMI */}
      <section id="services" className={styles.section}>
        <h2 className={styles.sectionTitle}>Layanan yang Kami Tawarkan</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Pengembangan Website</h3>
            <p>
              Kami membangun website yang cepat, aman, dan responsif
              menggunakan teknologi terbaru seperti Next.js.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Desain UI/UX</h3>
            <p>
              Tim desainer kami akan merancang antarmuka yang indah secara
              visual dan juga intuitif untuk digunakan.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Aplikasi Mobile</h3>
            <p>
              Kami membuat aplikasi cross-platform untuk iOS dan Android yang
              dapat meningkatkan jangkauan bisnis Anda.
            </p>
          </div>
        </div>
      </section>

      {/* 4. HUBUNGI KAMI */}
      <section id="contact" className={styles.section}>
        <h2 className={styles.sectionTitle}>Tertarik Bekerja Sama?</h2>
        <p>
          Kami siap mendiskusikan proyek Anda berikutnya. Hubungi kami melalui
          email di <strong>halo@PayamaDigitalSolusi.com</strong>.
        </p>
      </section>
    </main>
  );
}