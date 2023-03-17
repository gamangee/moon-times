import { useRouter } from 'next/router';
import Seo from '../components/Seo';
import styles from './index.module.css';

export default function Home({ results }) {
  const router = useRouter();

  const goToDetail = (id) => {
    router.push(`/list/${id}`);
  };

  return (
    <div className={styles.listCard}>
      <Seo title='Home' />
      <ul className={styles.lists}>
        {results.map((result, index) => (
          <li
            key={index}
            className={styles.list}
            onClick={() => goToDetail(result.list_name_encoded)}
          >
            <div>{result.list_name}</div>
            <div className={styles.date}>{result.newest_published_date}</div>
          </li>
        ))}
      </ul>
      <div className={styles.line} />
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch('https://books-api.nomadcoders.workers.dev/lists')
  ).json();

  return {
    props: {
      results,
    },
  };
}
