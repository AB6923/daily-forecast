import React, { useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext'

export const Forcast = () => {
	const { weatherData, isLoading } = useContext(WeatherContext)
	return weatherData && !isLoading ? <div>{weatherData.location}</div> : null
}
