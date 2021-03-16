import React, { useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext'

export const Header = () => {
	const { setWeatherData } = useContext(WeatherContext)

	return (
		<header className='page-header'>
			<h1 onClick={() => setWeatherData()}>Daily Forcast</h1>
		</header>
	)
}
