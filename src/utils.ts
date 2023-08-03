export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const howManyDaysInMonth = (date: Date) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  return new Date(year, month + 1, 0).getDate();
};

export const howManyPrevDays = (date: Date) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  return new Date(year, month, 1).getDay();
};

export const findPrevItem = (date: Date) => {
  const res = [];
  let counter = 0;
  const prevMonth = howManyDaysInMonth(
    new Date(date.getFullYear(), date.getMonth() - 1, date.getDay())
  );
  const howManyDaysPrev = howManyPrevDays(date) - 1;
  for (let i = 0; i < howManyDaysPrev; i++) {
    res.push(prevMonth - counter);
    counter++;
  }
  return res.reverse();
};
