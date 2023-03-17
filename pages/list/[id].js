/* eslint-disable react-hooks/rules-of-hooks */
import Seo from '@/components/Seo';
import Link from 'next/link';
import styles from './id.module.css';

export default function listDetail({ results }) {
  return (
    <div>
      <Seo title={results.display_name} />
      <h1 className={styles.mainTitle}>{results.list_name}</h1>
      <ul className={styles.lists}>
        {results.books.map((book) => (
          <li key={book.rank} className={styles.list}>
            <div className={styles.rank}>{book.rank}</div>
            <div className={styles.imgContainer}>
              <img
                src={book.book_image}
                alt={book.title}
                className={styles.img}
              />
            </div>
            <div className={styles.title}>{book.title}</div>
            <div className={styles.author}>by {book.author}</div>
            <div className={styles.description}>{book.description}</div>
            <Link href={book.amazon_product_url}>
              <button className={styles.buyBtn}>BUY</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const { results } = await (
    await fetch(`https://books-api.nomadcoders.workers.dev/list?name=${id}`)
  ).json();
  return {
    props: { results },
  };
}
