import { Select } from 'antd';
import {
  GameGenre,
  GamePlatform,
  GamePlatformRU,
  GameSorted,
  GameSortedRU,
  SearchParams,
  SearchParamsType,
} from 'app/types';
import { classNames } from 'shared/libs';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './GamesFilters.module.css';

export const GamesFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [params, setParams] = useState<SearchParamsType>(Object.fromEntries(searchParams));
  const [defaultValues, _setDefaultValues] = useState({
    tag: params.tag?.split('.') ?? [],
    platform: params.platform ?? 'Выбрать',
    'sort-by': params['sort-by'] ?? 'Выбрать',
  });

  const handleQuery = (values: string[], queryString: SearchParams) => {
    if (values.length !== 0 && values[0] !== '') {
      setParams((prevState) => {
        setSearchParams({ ...prevState, [queryString]: values.join('.') });
        return { ...prevState, [queryString]: values.join('.') };
      });
    } else {
      setParams((prevState) => {
        const temp = { ...prevState };
        delete temp[queryString];
        setSearchParams(temp);
        return temp;
      });
    }
  };

  const genreOptions = Object.values(GameGenre).map((x) => ({ value: x, label: x }));
  const platformOptions = Object.keys(GamePlatform).map((x) => ({
    value: GamePlatform[x as keyof typeof GamePlatform],
    label: GamePlatformRU[x as keyof typeof GamePlatformRU],
  }));

  const dateOptions = Object.keys(GameSorted).map((x) => ({
    value: GameSorted[x as keyof typeof GameSorted],
    label: GameSortedRU[x as keyof typeof GameSorted],
  }));

  return (
    <div className={styles.filters}>
      <label className={styles.filters__label}>
        Жанр
        <Select
          mode="multiple"
          placeholder="Выбрать"
          className={styles.filters__select}
          options={genreOptions}
          bordered={false}
          defaultValue={defaultValues.tag}
          onChange={(values) => handleQuery(values, SearchParams.GENRE)}
        />
      </label>
      <label className={styles.filters__label}>
        Платформа
        <Select
          placeholder="Выбрать"
          className={classNames(styles.filters__select, {}, [styles.filters__one])}
          options={platformOptions}
          bordered={false}
          defaultValue={defaultValues.platform}
          onChange={(values) => handleQuery([values], SearchParams.PLATFORM)}
        />
      </label>
      <label className={styles.filters__label}>
        Отсортировать по...
        <Select
          placeholder="Выбрать"
          className={classNames(styles.filters__select, {}, [styles.filters__one])}
          options={dateOptions}
          bordered={false}
          defaultValue={defaultValues['sort-by']}
          onChange={(values) => handleQuery([values], SearchParams['SORT-BY'])}
        />
      </label>
    </div>
  );
};
