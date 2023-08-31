import { Wrapper } from 'shared/ui/wrapper';

import styles from './NotFound.module.css';

export const NotFound = () => (
  <Wrapper className={styles.inner__404}>
    <h1 className={styles.title}>Ёмаё!</h1>
    <p className={styles.text}>Такой страницы нет</p>
  </Wrapper>
);
