import { Wrapper } from 'shared/ui/wrapper';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <span className={styles.footer__year}>2023</span>
      </Wrapper>
    </footer>
  );
};
