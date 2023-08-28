import { classNames } from 'shared/libs';

import styles from './Wrapper.module.css';

import type { FCProps } from 'app/types';

type Props = {
  className?: string;
};

export const Wrapper = ({ children, className }: FCProps & Props) => (
  <div className={styles.bounding}>
    <div className={classNames(styles.inner, {}, [className ?? ''])}>{children}</div>
  </div>
);
