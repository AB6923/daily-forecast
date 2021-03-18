import React, { useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext'
import { CurrentForecastCard, ForecastCard } from '../components'

export const Forecast = () => {
	const { weatherData, isLoading } = useContext(WeatherContext)
	return weatherData && !isLoading ? (
		<section className='forcast'>
			<header className='section-header'>
				<small>The weather in</small>
				<h1>{weatherData[0].location}</h1>
			</header>
			<CurrentForecastCard weatherData={weatherData[0]} />

			<div className='forcast-cards'>
				{weatherData.map((forcast, i) => (
					<ForecastCard weatherData={forcast} key={i} />
				))}
			</div>
		</section>
	) : null
}
