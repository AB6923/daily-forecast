import React, { useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext'

export const Temp = ({ temp }) => {
	const { units } = useContext(WeatherContext)

	const kelvinToCelsius = (num) => {
		return Math.round(num - 273.15)
	}
	const kelvinToFahrenheit = (num) => {
		return Math.round(num * 1.8 - 459.67)
	}

	if (units === 'metric') {
		return (
			<>
				{kelvinToCelsius(temp)}
				<span className='degrees'>°C</span>
			</>
		)
	}

	if (units === 'imperial') {
		return (
			<>
				{kelvinToFahrenheit(temp)}
				<span className='degrees'>°F</span>
			</>
		)
	}
}
