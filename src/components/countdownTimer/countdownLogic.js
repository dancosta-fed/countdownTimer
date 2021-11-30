import DayJS from 'dayjs';

export function getTimeLeftUntilTimestamp(timestampms) {
    const timestampDayJs = DayJS(timestampms);
    const nowDayJs = DayJS();
    return {
        seconds: getSecondsLeft(nowDayJs, timestampDayJs),
        minutes: getMinutesLeft(nowDayJs, timestampDayJs),
        hours: getHoursLeft(nowDayJs, timestampDayJs),
        days: getDaysLeft(nowDayJs, timestampDayJs)
    };

    function getSecondsLeft(nowDayJs, timestampDayJs) {
        const seconds = timestampDayJs.diff(nowDayJs, 'seconds') % 60;
        return seconds;
    }

    function getMinutesLeft(nowDayJs, timestampDayJs) {
        const minutes = timestampDayJs.diff(nowDayJs, 'minutes') % 60;
        return minutes;
    }

    function getHoursLeft(nowDayJs, timestampDayJs) {
        const hours = timestampDayJs.diff(nowDayJs, 'hours') % 24;
        return hours;
    }

    function getDaysLeft(nowDayJs, timestampDayJs) {
        const days = timestampDayJs.diff(nowDayJs, 'days');
        return days;
    }
}