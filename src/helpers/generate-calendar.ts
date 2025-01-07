const generateDaysInMonth = (year: number, month: number) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];
    
    for (let day = 1; day <= daysInMonth; day++) {
        days.push(new Date(year, month, day));
    }

    return days;
};

export const generateCalendar = (year: number, month: number) => {
    const days = generateDaysInMonth(year, month);
    const firstDayOfWeek = days[0].getDay();
    const calendar = [];

    for (let i = 0; i < firstDayOfWeek; i++) {
        calendar.push(null);
    }

    calendar.push(...days);

    while (calendar.length % 7 !== 0) {
        calendar.push(null);
    }

    return calendar;
};

