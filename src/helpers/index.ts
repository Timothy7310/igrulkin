export const getRussianFormatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'numeric', year: 'numeric' };
  const dateString = new Date(date).toLocaleString('ru', options);
  return dateString;
};
