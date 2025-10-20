
import styles from '../../page.module.css'; 
import { Metadata } from 'next';
import { notFound } from 'next/navigation';


type PageProps = {
  params: {
    id: string; 
  };
};

const serviceData: { [key: string]: { title: string; description: string } } = {
  'pengembangan-website': {
    title: 'Pengembangan Website',
    description:
      'Kami membangun website yang cepat, aman, dan responsif menggunakan teknologi terbaru seperti Next.js. Dari landing page, company profile, hingga e-commerce, kami siap mewujudkan kebutuhan digital Anda.',
  },
  'desain-ui-ux': {
    title: 'Desain UI/UX',
    description:
      'Tampilan yang baik bukan hanya soal estetika, tapi juga fungsionalitas. Tim desainer kami akan merancang antarmuka yang tidak hanya indah secara visual tetapi juga intuitif dan mudah digunakan oleh target audiens Anda.',
  },
  'aplikasi-mobile': {
    title: 'Aplikasi Mobile',
    description:
      'Jangkau pelanggan Anda di mana saja melalui aplikasi mobile. Kami membuat aplikasi cross-platform untuk iOS dan Android yang dapat meningkatkan jangkauan bisnis dan interaksi pengguna.',
  },
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const service = serviceData[params.id];
  if (!service) {
    return {
      title: 'Layanan Tidak Ditemukan',
    };
  }
  return {
    title: `${service.title} - PT. Payama Digital Solusi`,
    description: service.description.substring(0, 150),
  };
}

export default function LayananDetailPage({ params }: PageProps) {
  const { id } = params;
  const service = serviceData[id];

  // Jika id tidak ada di data kita, tampilkan halaman 404
  if (!service) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.textContainer}>
          <h1 className={styles.sectionTitle}>{service.title}</h1>
          
          <p>{service.description}</p>
        </div>
      </section>
    </main>
  );
}