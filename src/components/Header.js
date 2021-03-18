import React, { useContext, useState } from 'react'
import { WeatherContext } from '../contexts/WeatherContext'
import { ReactComponent as SettingsCog } from '../components/icons/bx-cog.svg'
import { ReactComponent as CloseIcon } from '../components/icons/bx-x.svg'
import { UnitsForm } from '../components'

export const Header = () => {
	const [settingsOpen, setSettingsOpen] = useState(false)
	const { setWeatherData } = useContext(WeatherContext)

	return (
		<header className='page-header'>
			<h1 onClick={() => setWeatherData()}>Daily Forecast</h1>

			{settingsOpen && (
				<div className='units-form-group'>
					<UnitsForm />
					<CloseIcon fill='#fffafa' onClick={() => setSettingsOpen(false)} />
				</div>
			)}
			{!settingsOpen && (
				<SettingsCog fill='#fffafa' onClick={() => setSettingsOpen(true)} />
			)}
		</header>
	)
}
