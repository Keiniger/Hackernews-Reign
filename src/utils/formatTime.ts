export const formatTime = (date: any) => {
  const milisecondsDate = new Date(date).getTime();
  const now = Date.now();
  const dif = now - milisecondsDate;
  const hoursTransformation = dif / (1000 * 3600);
  let hours = Math.trunc(hoursTransformation);

  let word = "";
  let timeUnit = 0;
  if (hours < 1) {
    return "a few minutes ago";
  } else if (hours < 24) {
    timeUnit = hours;
    word = timeUnit === 1 ? "hour" : "hours";
  } else if (hours < 24 * 7) {
    timeUnit = Math.floor(hours / 24);
    word = timeUnit === 1 ? "day" : "days";
  } else if (hours < 24 * 7 * 4) {
    timeUnit = Math.floor(hours / (24 * 7));
    word = timeUnit === 1 ? "week" : "weeks";
  } else if (hours < 24 * 7 * 4 * 12) {
    timeUnit = Math.floor(hours / (24 * 7 * 4));
    word = timeUnit === 1 ? "month" : "months";
  } else {
    timeUnit = Math.floor(hours / (24 * 7 * 4 * 12));
    word = timeUnit === 1 ? "year" : "years";
  }
  return `${timeUnit} ${word} ago`;
};
