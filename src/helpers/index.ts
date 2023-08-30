import { SearchParamsType } from 'app/types';

export const getRussianFormatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'numeric', year: 'numeric' };
  const dateString = new Date(date).toLocaleString('ru', options);
  return dateString;
};

export const hasFetchQuery = (params: SearchParamsType) => {
  return Object.keys(params).length > 0;
};

export const hasFetchTagQuery = (params: SearchParamsType) => {
  return Object.keys(params).some((x) => x === 'tag');
};
