export const meetupDay = (year, month, day, descriptor) => {
    const desc = DESCRIPTORS.indexOf(descriptor);
    let date;
    switch (desc) {
        case TEENTH:
            date = firstTeenthDayOfMonth(year, month);
            break;
        case LAST:
            date = lastDayOfMonth(year, month);
            break;
        default:
            date = firstDayOfMonth(year, month);
    }
    let d = DAYS.indexOf(day);
    if (date.getDay() == d && !(desc > FIRST && desc < TEENTH)) {
        return date;
    }
    if (desc === LAST) {
        d += (d > date.getDay() ? -7 : 0) - date.getDay();
        date.setDate(date.getDate() + d);
    } else {
        d += (d < date.getDay() ? 7 : 0) - date.getDay();
        d += (desc < TEENTH ? desc * 7 : 0);
        date.setDate(date.getDate() + d);
        if (date > lastDayOfMonth(year, month)) {
            throw new Error('Nonexistent day in month');
        }
    }
    return date;
};

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DESCRIPTORS = ['1st', '2nd', '3rd', '4th', '5th', 'teenth', 'last'];
const FIRST = 0;
const TEENTH = 5;
const LAST = 6;

function firstDayOfMonth(y, m) {
    return new Date(y, m, 1);
}

function firstTeenthDayOfMonth(y, m) {
    return new Date(y, m, 10);
}

function lastDayOfMonth(y, m) {
    return new Date(y, m + 1, 0);
}