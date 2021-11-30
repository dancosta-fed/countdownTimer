import dayjs from 'dayjs';

export function getRemainingTimeUntilMsTimestamp(timestampMs) {



    const timestampDayJs = dayjs(timestampMs);
    const nowDayJs = dayjs();

    if (timestampDayJs.isBefore(nowDayJs)) {
        return {
            seconds: '00',
            minutes: '00',
            hours: '00',
            days: '00'
        }
    }


    return {
        seconds: getSecondsLeft(nowDayJs, timestampDayJs),
        minutes: getMinutesLeft(nowDayJs, timestampDayJs),
        hours: getHoursLeft(nowDayJs, timestampDayJs),
        days: getDaysLeft(nowDayJs, timestampDayJs)
    };

    function getSecondsLeft(nowDayJs, timestampDayJs) {
        const seconds = timestampDayJs.diff(nowDayJs, 'seconds') % 60;
        return padWithZeros(seconds, 2);
    }

    function getMinutesLeft(nowDayJs, timestampDayJs) {
        const minutes = timestampDayJs.diff(nowDayJs, 'minutes') % 60;
        return padWithZeros(minutes, 2);;
    }

    function getHoursLeft(nowDayJs, timestampDayJs) {
        const hours = timestampDayJs.diff(nowDayJs, 'hours') % 24;
        return padWithZeros(hours, 2);;
    }

    function getDaysLeft(nowDayJs, timestampDayJs) {
        const days = timestampDayJs.diff(nowDayJs, 'days');
        return days.toString();
    }

    function padWithZeros(number, minLength) {
        const numberString = number.toString()
        if (numberString.length >= minLength) return numberString;
        return "0".repeat(minLength - numberString.length) + numberString;
    }



}