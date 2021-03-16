import React, { useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext'
import { LocationForm } from '../components'

export const Splash = () => {
	const { isLoading, weatherData } = useContext(WeatherContext)
	return !isLoading && !weatherData ? (
		<section className='splash'>
			<h1>Daily Forcast</h1>
			<LocationForm />
		</section>
	) : null
}
