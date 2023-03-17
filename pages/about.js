import Seo from '@/components/Seo';
import styles from './about.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Seo title='About' />
      <div>
        <p className={styles.mainTitle}>The All Access sale ends soon.</p>
        <p className={styles.mainTitle}>Save now, or subscribe to News only.</p>
        <div className={styles.sub}>
          <p className={styles.subTitle}>All Access</p>
          <p className={styles.subDes}>
            Unlimited access to everything The Times has to offer.
          </p>
          <p className={styles.subDes}>All in one subscription.</p>
          <div className={styles.price}>
            <p className={styles.oldPrice}>$3</p>
            <p className={styles.newPrice}>$0.50/week</p>
          </div>
          <div className={styles.detail}>
            Billed every 4 weeks for the first year.
          </div>
          <button className={styles.btn}>
            <a
              className={styles.btnLink}
              href='https://myaccount.nytimes.com/get-started/payment?o=7d32d566-1f9f-45ff-94be-ea81ef9a0275&campaignId=9YU8R&flow=byob'
            >
              Subscribe Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
