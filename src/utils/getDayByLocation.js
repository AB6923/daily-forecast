const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
export const getDayByLocation = (timezoneRes) => {
	const weekdays = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	]
	const localDate = new Date()
	dayjs.extend(utc)
	dayjs.extend(timezone)

	const requestedDate = dayjs(localDate).tz(timezoneRes).utc(true).toString()
	const shortDayName = requestedDate.split(',')[0]
	let longDayName = ''

	weekdays.forEach((day) => {
		if (shortDayName === day[0] + day[1] + day[2]) {
			longDayName = day
		}
	})

	return longDayName
}
