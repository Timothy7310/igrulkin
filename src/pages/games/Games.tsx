import { SearchParamsType } from 'app/types';
import { Wrapper } from 'shared/ui/wrapper';
import { Spinner } from 'shared/ui';
import { GamesList, GamesFilters } from 'components';
import { gamesAPI } from 'app/services';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { hasFetchQuery, hasFetchTagQuery } from 'helpers';
import styles from './Games.module.css';

const Games = () => {
  const [searchParams, _setSearchParams] = useSearchParams();
  const [params, setParams] = useState<SearchParamsType>(Object.fromEntries(searchParams));

  useEffect(() => {
    setParams(Object.fromEntries(searchParams));
  }, [searchParams]);

  const {
    data: games,
    isLoading,
    isError,
    error,
  } = !hasFetchQuery(params)
    ? gamesAPI.useFetchAllGamesQuery('')
    : !hasFetchTagQuery(params)
    ? gamesAPI.useFetchGamesWithQueryQuery(params)
    : gamesAPI.useFetchFilteredGamesQuery(params);

  const isEmptyResult = () => {
    return Boolean(games && 'status' in games);
  };

  console.log(error);

  return (
    <Wrapper>
      <section className={styles.games}>
        <h2 className={styles.games__title}>Игры</h2>
        {isLoading && <Spinner />}
        {isError && 'status' in (error as { status: '' }) && (
          <p className={styles.games__error}>
            ёмаё, ошибка со статусом{' '}
            <span className={styles.games__error_span}>{(error as { status: '' }).status}</span>
          </p>
        )}
        {!isEmptyResult() && games && <GamesFilters />}
        {!isEmptyResult() && games && <GamesList games={games} />}
        {isEmptyResult() && <span className={styles.games__error}>ёмаё, такого не существует</span>}
      </section>
    </Wrapper>
  );
};

export default Games;
