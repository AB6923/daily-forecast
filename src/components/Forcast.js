import React, { useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext'
import { CurrentWeather } from '../components'

export const Forcast = () => {
	const { currentWeather, isLoading } = useContext(WeatherContext)
	return currentWeather && !isLoading ? (
		<section className='forcast'>
			<header>
				The weather in
				<h1>{currentWeather.location}</h1>
			</header>
			{/* <CurrentWeather /> */}
		</section>
	) : null
}
