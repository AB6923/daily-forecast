import React from 'react'
import { Temp } from '../components'

export const ForcastCard = ({ weatherData }) => {
	const { day, description, temp } = weatherData
	const isCurrent = weatherData.day.toLowerCase() === 'current'
	console.log(weatherData)

	return weatherData && !isCurrent ? (
		<article className='forcast-card'>
			<small>{day}</small>
			<h1>
				Max: <Temp temp={temp.max} />
			</h1>
			<p>{description}</p>
		</article>
	) : null
}
