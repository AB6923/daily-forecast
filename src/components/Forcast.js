import React, { useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext'
import { CurrentWeather } from '../components'
import { UpcomingWeather } from './UpcomingWeather'

export const Forcast = () => {
	const { currentWeather, upcomingWeather, isLoading } = useContext(
		WeatherContext
	)

	return currentWeather && !isLoading ? (
		<section className='forcast'>
			<header>
				The weather in
				<h1>{currentWeather.location}</h1>
			</header>
			<div className='forcast-cards'>
				<CurrentWeather weatherData={currentWeather} />
				{upcomingWeather.map((forcast, i) => (
					<UpcomingWeather weatherData={forcast} key={i} />
				))}
			</div>
		</section>
	) : null
}
