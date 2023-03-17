import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './NavBar.module.css';

export default function NavBar() {
  const router = useRouter();
  const [date, setDate] = useState('');

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  useEffect(() => {
    const date = new Date();
    setDate(date.toLocaleString('en-US', options));
  }, []);

  return (
    <nav className={styles.container}>
      <div className={styles.header}>
        {/* <div>
          <div className={styles.nowdate}>
            <strong>{date.split(',')}</strong>
          </div>
          <div className={styles.todayPaper}>Today&apos;s Paper</div>
        </div> */}
        <div className={styles.logo}>
          <Link href='/'>
            <img
              src='https://www.vectorlogo.zone/logos/nytimes/nytimes-wordmark.svg'
              alt='logo'
            />
          </Link>
        </div>
        {/* <div className={styles.weather}>weather</div> */}
      </div>
      <div className={styles.navigator}>
        <div className={styles.home}>
          <Link href='/' legacyBehavior>
            <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
          </Link>
        </div>
        <div className={styles.about}>
          <Link href='/about' legacyBehavior>
            <a className={router.pathname === '/about' ? 'active' : ''}>
              About
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.border}></div>
      <style jsx>
        {`
          .active {
            text-decoration: underline;
          }
        `}
      </style>
    </nav>
  );
}
