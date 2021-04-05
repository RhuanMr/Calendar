const date = new Date();

export const renderCalendar = () => {
  date.setDate(1);

  const firstDayIndex = date.getDay();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0,
  ).getDate();

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
  ).getDate();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  let days = [];
  let aux = 0;

  for (let x = firstDayIndex; x > 0; x--) {
    days = [...days, {key: aux++, number: prevLastDay - x + 1, type: 'prev'}];
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days = [...days, {key: aux++, number: i, type: 'today'}];
    } else {
      days = [...days, {key: aux++, number: i, type: 'current'}];
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days = [...days, {key: aux++, number: j, type: 'next'}];
  }

  return days;
};

export const renderMonth = () => {
  const months = [
    'January | ' + date.getFullYear(),
    'February | ' + date.getFullYear(),
    'March | ' + date.getFullYear(),
    'April | ' + date.getFullYear(),
    'May | ' + date.getFullYear(),
    'June | ' + date.getFullYear(),
    'July | ' + date.getFullYear(),
    'August | ' + date.getFullYear(),
    'September | ' + date.getFullYear(),
    'October | ' + date.getFullYear(),
    'November | ' + date.getFullYear(),
    'December | ' + date.getFullYear(),
  ];

  return months[date.getMonth()];
};
