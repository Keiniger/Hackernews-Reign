export const formatTime = (date: any) => {
  const milisecondsDate = new Date(date).getTime();
  const now = Date.now();
  const dif = now - milisecondsDate;
  const hoursTransformation = dif / (1000 * 3600);
  const truncatedHours = Math.trunc(hoursTransformation);

  if (truncatedHours < 1) {
    return "a few minutes ago by the author";
  }

  const hourWord = truncatedHours === 1 ? "hour" : "hours";

  return `${truncatedHours} ${hourWord} ago by the author`;
};
