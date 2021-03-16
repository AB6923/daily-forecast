import React, { useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext'
import { ReactComponent as SettingsCog } from '../components/icons/bx-cog.svg'

export const Header = () => {
	const { setWeatherData } = useContext(WeatherContext)

	return (
		<header className='page-header'>
			<h1 onClick={() => setWeatherData()}>Daily Forcast</h1>
			<SettingsCog fill='#fffafa' />
		</header>
	)
}
