import { Wrapper } from 'shared/ui/wrapper';
import GamesList from 'components/gamesList/GamesList';
import styles from './Games.module.css';
import { gamesAPI } from 'app/services';
import { Spinner } from 'shared/ui';

const Games = () => {
  const { data: games, isLoading, isError, error } = gamesAPI.useFetchAllGamesQuery('');

  return (
    <Wrapper>
      <section className={styles.games}>
        <h2 className={styles.games__title}>Игры</h2>
        {isLoading && <Spinner />}
        {isError && 'originalStatus' in error && (
          <p className={styles.games__error}>
            ёмаё, ошибка с кодом{' '}
            <span className={styles.games__error_span}>{error.originalStatus}</span>
          </p>
        )}
        {games && <GamesList games={games} />}
      </section>
    </Wrapper>
  );
};

export default Games;
