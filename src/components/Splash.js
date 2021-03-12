import React, { useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext'

export const Splash = () => {
	const { isLoading, currentWeather } = useContext(WeatherContext)
	return !isLoading && !currentWeather ? <div>Splash</div> : null
}
