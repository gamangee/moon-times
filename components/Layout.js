import NavBar from './NavBar';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <NavBar />
      <div>{children}</div>
    </div>
  );
}
