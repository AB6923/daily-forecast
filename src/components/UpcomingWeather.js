import React from 'react'
import { WeatherIcon } from './WeatherIcon'

export const UpcomingWeather = ({ weatherData }) => {
	console.log(weatherData)
	return (
		<article className='forcast-card'>
			<WeatherIcon iconRef={weatherData.icon} />
			<p>{weatherData.description}</p>
		</article>
	)
}
