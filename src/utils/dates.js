export const getTodayDate = () => {
  const dateArray = new Date().toDateString().split(' ');
  dateArray.shift();
  let temp = dateArray[1];
  dateArray[1] = dateArray[0];
  dateArray[0] = temp;
  return dateArray.join(' ');
};

export const dateFormat = date => {
  const dateArray = new Date(date).toDateString().split(' ');
  dateArray.shift();
  let temp = dateArray[1];
  dateArray[1] = dateArray[0];
  dateArray[0] = temp;
  return dateArray.join(' ');
};

export const dateFormatShortYear = date => {
  const dateArray = new Date(date).toDateString().split(' ');
  dateArray.shift();
  let temp = dateArray[1];
  dateArray[1] = ` ${dateArray[0]}`;
  dateArray[0] = temp;
  dateArray[2] = `, ${dateArray[2]?.slice(2)}`;
  return dateArray.join('');
};

export const getDayShort = date => {
  const dateArray = new Date(date).toDateString().split(' ');
  return dateArray[0];
};
