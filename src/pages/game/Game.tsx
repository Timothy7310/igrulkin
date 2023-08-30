import { getRussianFormatDate } from 'helpers';
import { classNames } from 'shared/libs';
import { Carousel } from 'antd';
import { Spinner } from 'shared/ui';
import { Wrapper } from 'shared/ui/wrapper';
import { gamesAPI } from 'app/services';
import { useParams, Link } from 'react-router-dom';
import styles from './Game.module.css';

const Game = () => {
  const { id } = useParams();
  const { data: game, isLoading, isError, error } = gamesAPI.useFetchGameByIDQuery(id ?? '');

  return (
    <Wrapper>
      <section className={styles.game__wrap}>
        <Link
          className={styles.game__back}
          to="/"
        >
          Назад
        </Link>

        {isLoading && <Spinner />}
        {isError && 'originalStatus' in error && (
          <p className={styles.game__error}>
            ёмаё, ошибка с кодом{' '}
            <span className={styles.game__error_span}>{error.originalStatus}</span>
          </p>
        )}
        {game && (
          <div className={styles.game}>
            <div className={styles.game__top}>
              <img
                src={game.thumbnail}
                alt=""
                className={styles.game__poster}
              />
              <div className={styles.game__screenshots}>
                <Carousel>
                  {game.screenshots.map((screenshot) => (
                    <img
                      className={styles.game__screenshot}
                      width={350}
                      height={196}
                      src={screenshot.image}
                      alt=""
                      key={screenshot.id}
                    />
                  ))}
                </Carousel>
              </div>
              <div className={styles.game__text}>
                <h2 className={styles.game__name}>{game.title}</h2>
                <ul className={styles.game__subinfo}>
                  <li className={styles.game__subinfo_item}>
                    Разработчик: <span className={styles.game__subinfo_span}>{game.developer}</span>
                  </li>
                  <li className={styles.game__subinfo_item}>
                    Издатель: <span className={styles.game__subinfo_span}>{game.publisher}</span>
                  </li>
                  <li className={styles.game__subinfo_item}>
                    Платформа: <span className={styles.game__subinfo_span}>{game.platform}</span>
                  </li>
                  <li className={styles.game__subinfo_item}>
                    Жанр:{' '}
                    <span
                      className={classNames(styles.game__subinfo_genre, {}, [
                        styles.game__subinfo_span,
                      ])}
                    >
                      {game.genre}
                    </span>
                  </li>
                  <li className={styles.game__subinfo_item}>
                    Дата выхода:{' '}
                    <span className={styles.game__subinfo_span}>
                      {getRussianFormatDate(game.release_date)}
                    </span>
                  </li>
                </ul>
                <p className={styles.game__description}>{game.description}</p>
                {game.minimum_system_requirements && (
                  <div className={styles.game__system}>
                    <span className={styles.game__system_title}>Системные требования</span>
                    <ul className={styles.game__system_list}>
                      <li className={styles.game__system_item}>
                        ОС:{' '}
                        <span className={styles.game__system_result}>
                          {game.minimum_system_requirements.os}
                        </span>
                      </li>
                      <li className={styles.game__system_item}>
                        Процессор:{' '}
                        <span className={styles.game__system_result}>
                          {game.minimum_system_requirements.processor}
                        </span>
                      </li>
                      <li className={styles.game__system_item}>
                        Оперативная память:{' '}
                        <span className={styles.game__system_result}>
                          {game.minimum_system_requirements.memory}
                        </span>
                      </li>
                      <li className={styles.game__system_item}>
                        Видеокарта:{' '}
                        <span className={styles.game__system_result}>
                          {game.minimum_system_requirements.graphics}
                        </span>
                      </li>
                      <li className={styles.game__system_item}>
                        Место на диске:{' '}
                        <span className={styles.game__system_result}>
                          {game.minimum_system_requirements.storage}
                        </span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </Wrapper>
  );
};

export default Game;
