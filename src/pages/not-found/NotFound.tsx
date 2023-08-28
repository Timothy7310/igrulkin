import { Wrapper } from 'shared/ui/wrapper';

import styles from './NotFound.module.css';

export const NotFound = () => (
  <Wrapper className={styles.inner__404}>
    <h1>Oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
  </Wrapper>
);
