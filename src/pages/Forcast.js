import React, { useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext'
import { ForcastCard } from '../components'

export const Forcast = () => {
	const { weatherData, isLoading } = useContext(WeatherContext)

	return weatherData && !isLoading ? (
		<section className='forcast'>
			<header className='section-header'>
				<small>The weather in</small>
				<h1>{weatherData[0].location}</h1>
			</header>
			<div className='forcast-cards'>
				{weatherData.map((forcast, i) => (
					<ForcastCard weatherData={forcast} key={i} />
				))}
			</div>
		</section>
	) : null
}
