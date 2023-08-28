import { Wrapper } from 'shared/ui/wrapper';
import { Link } from 'react-router-dom';
import logo from 'assets/logo.png';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper>
        <Link
          to="/"
          className={styles.header__logo}
        >
          <img
            src={logo}
            alt=""
            className={styles.header__logo_icon}
          />
          <h1 className={styles.header__logo_text}>Игрулькин</h1>
        </Link>
      </Wrapper>
    </header>
  );
};
