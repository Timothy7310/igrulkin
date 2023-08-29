import { Games as GamesItemProps } from 'app/types';
import { Link } from 'react-router-dom';
import { getRussianFormatDate } from 'helpers';
import styles from './GamesItem.module.css';

const GamesItem = ({ game }: { game: GamesItemProps }) => {
  return (
    <li className={styles.item}>
      <Link to="/">
        <article className={styles.game}>
          <div className={styles.game__top}>
            <img
              src={game.thumbnail}
              alt=""
              width={350}
              height={197}
              loading="lazy"
              className={styles.game__poster}
            />
            <span className={styles.game__date}>{getRussianFormatDate(game.release_date)}</span>
          </div>
          <div className={styles.game__bottom}>
            <h3 className={styles.game__name}>{game.title}</h3>
            <span className={styles.game__genre}>{game.genre}</span>
            <div className={styles.game__subinfo}>
              <span className={styles.game__platform}>{game.platform}</span>
              <span className={styles.game__publisher}>{game.publisher}</span>
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
};

export default GamesItem;
