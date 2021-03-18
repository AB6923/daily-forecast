import React, { useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext'
import { LocationForm, WeatherIcon } from '../components'

export const Splash = () => {
	const { isLoading, weatherData } = useContext(WeatherContext)
	return !isLoading && !weatherData ? (
		<section className='splash'>
			<WeatherIcon iconRef='01d' />
			<h1>Daily Forecast</h1>
			<LocationForm />
		</section>
	) : null
}
