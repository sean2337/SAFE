function getWeekDates() {
  const today = new Date();
  const weekDates = [];

  const daysOfWeek = [
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
  ];

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    // 날짜와 요일 가져오기
    const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
    const dayIndex = date.getDay();
    const formattedDay = daysOfWeek[dayIndex];

    weekDates.push({ date: formattedDate, day: formattedDay });
  }

  return weekDates;
}

export default getWeekDates;
