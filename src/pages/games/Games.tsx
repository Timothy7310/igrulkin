import { Wrapper } from 'shared/ui/wrapper';
import GamesList from 'components/gamesList/GamesList';
import { mock } from '../../../public/games.js';
import styles from './Games.module.css';

const Games = () => {
  return (
    <Wrapper>
      <section className={styles.games}>
        <h2 className={styles.games__title}>Games</h2>
        <GamesList games={mock} />
      </section>
    </Wrapper>
  );
};

export default Games;
