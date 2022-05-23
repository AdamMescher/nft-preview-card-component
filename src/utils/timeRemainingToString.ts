interface TimeRemaining {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}

const timeRemainingToString = ({
  year,
  month,
  day,
  hour,
  minute,
  second
}: TimeRemaining): string => {
  if (year) return `${year} year${year > 1 ? "s" : null} left`;
  if (month) return `${month} month${month > 1 ? "s" : null} left`;
  if (hour) return `${hour} hour${hour > 1 ? "s" : null} left`;
  if (day) return `${day} day${day > 1 ? "s" : null} left`;
  if (minute) return `${minute} minute${minute > 1 ? "s" : null} left`;
  if (second) return `${second} second${second > 1 ? "s" : null} left`;
};

export default timeRemainingToString;
