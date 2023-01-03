import { DATE_IN_MONTHS, MONTHS } from '../constant/calendar';

export const getCurrentDate = () => {
    const date = new Date();
    return date.toISOString().split('T')[0];
};

export const getAvailableDates = (preservedDates = [], year, month) => {
    if (!MONTHS.includes(month)) {
        throw Error(`invalid month: ${month}`);
    }

    const preservedDateMap = {};
    for (let preservedDate in preservedDates) {
        preservedDateMap[preservedDate] = true;
    }

    let dateInMonth = DATE_IN_MONTHS[month];
    const availableDates = [];

    if (month == MONTHS[1] && checkLeapYear(year)) {
        dateInMonth += 1;
    }

    for (let date = 1; date <= dateInMonth; date += 1) {
        if (preservedDateMap[date] == null || preservedDateMap[date] == undefined) {
            availableDates.push(date);
        }
    }

    return availableDates;
};

export const checkLeapYear = (year) => {
    return year % 400 || (year % 4 && !(year % 100));
};

export const extractDate = (date) => {
    const _date = new Date(date);
    return {
        second: _date.getSeconds(),
        minute: _date.getMinutes(),
        hour:   _date.getHours(),
        date:   _date.getDate(),
        month:  _date.getMonth(),
        year:   _date.getFullYear(),
    }
}