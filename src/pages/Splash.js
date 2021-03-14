import React, { useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext'

export const Splash = () => {
	const { isLoading, weatherData } = useContext(WeatherContext)
	return !isLoading && !weatherData ? <div>Splash</div> : null
}
