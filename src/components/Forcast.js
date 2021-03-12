import React, { useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext'

export const Forcast = () => {
	const { weatherData } = useContext(WeatherContext)
	return weatherData ? <div>{weatherData.location}</div> : null
}
