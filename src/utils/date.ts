export const getFormattedDate = (date: Date): string =>
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

export const getDateMinusDays = (date: Date, days: number): Date =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);

export const isValidDateFormat = (dateString: string): boolean => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    return false;
  }

  const date = new Date(`${dateString}T00:00:00Z`);
  if (isNaN(date.getTime())) {
    return false;
  }

  const [year, month, day] = [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
  ];
  if (
    year > new Date().getFullYear() ||
    year < new Date().getFullYear() - 20 ||
    month > 12 ||
    day > new Date(year, month, 0).getDate()
  ) {
    return false;
  }

  return date.toISOString().substring(0, 10) === dateString;
};
