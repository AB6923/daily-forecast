import React, { useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext'

export const PageHeader = () => {
	const { units, setUnits } = useContext(WeatherContext)

	return (
		<header className='page-header'>
			<h1>Daily Forcast</h1>
			<form>
				<label htmlFor='metric'>
					Celsius
					<input
						type='radio'
						name='units'
						id='celsius'
						onChange={(e) => setUnits(e.target.id)}
						defaultChecked={units === 'celsius'}
					/>
				</label>
				<label htmlFor='imperial'>
					Fahrenheit
					<input
						type='radio'
						name='units'
						id='fahrenheit'
						onChange={(e) => setUnits(e.target.id)}
						defaultChecked={units === 'fahrenheit'}
					/>
				</label>
				<label htmlFor='locale-default'>
					Locale Default
					<input
						type='radio'
						name='units'
						id='local-default'
						onChange={(e) => setUnits(e.target.id)}
						defaultChecked={units === 'locale-default'}
					/>
				</label>
			</form>
		</header>
	)
}
