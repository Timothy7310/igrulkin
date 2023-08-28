import styles from './Header.module.css';
import { Wrapper } from 'shared/ui/wrapper';
export const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper>Игрулькин</Wrapper>
    </header>
  );
};
