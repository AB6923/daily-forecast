// import React, { useContext } from 'react'
// import { WeatherContext } from '../contexts/WeatherContext'
// import { WeatherIcon, Temp } from '../components'

export const CurrentWeather = () => {
	// const { weatherData } = useContext(WeatherContext)
	// const icon = weatherData.current.weather[0].icon

	return (
		<article className='current-weather'>
			current weather
			{/* <WeatherIcon iconRef={icon} />
			<Temp temp={weatherData.current.temp} country={weatherData.country} /> */}
		</article>
	)
}
