import React from 'react'
import { WeatherIcon, Temp } from '../components'

export const CurrentWeather = ({ weatherData }) => {
	console.log(weatherData)
	return (
		<article className='forcast-card'>
			<WeatherIcon iconRef={weatherData.icon} />
			<Temp temp={weatherData.currentTemp} country={weatherData.country} />
		</article>
	)
}
