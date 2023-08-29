import { GamesList as GameListProps } from 'app/types';
import GamesItem from 'components/gamesItem/GamesItem';
import styles from './GamesList.module.css';

const GamesList = ({ games }: { games: GameListProps }) => {
  return (
    <ul className={styles.list}>
      {games.map((game) => (
        <GamesItem
          game={game}
          key={game.id}
        />
      ))}
    </ul>
  );
};

export default GamesList;
