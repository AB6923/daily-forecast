const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')

export const getDayByLocation = (timezoneRes, offset) => {
	if (!offset) offset = 0

	const weekdays = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	]
	const currentLocalDate = new Date()
	const requestedLocalDate = new Date(
		currentLocalDate.setDate(currentLocalDate.getDate() + offset)
	)

	dayjs.extend(utc)
	dayjs.extend(timezone)

	const requestedDate = dayjs(requestedLocalDate)
		.tz(timezoneRes)
		.utc(true)
		.toString()
	const shortDayName = requestedDate.split(',')[0]
	let longDayName = ''

	weekdays.forEach((day) => {
		if (shortDayName === day[0] + day[1] + day[2]) {
			longDayName = day
		}
	})

	return longDayName
}
