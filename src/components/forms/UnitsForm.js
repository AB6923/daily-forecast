import React, { useContext } from 'react'
import { WeatherContext } from '../../contexts/WeatherContext'
export const UnitsForm = () => {
	const { units, setUnits } = useContext(WeatherContext)

	return (
		<form className='units-form'>
			<label htmlFor='metric'>
				Celsius
				<input
					type='radio'
					name='units'
					id='metric'
					onChange={(e) => setUnits(e.target.id)}
					checked={units === 'metric'}
				/>
			</label>
			<label htmlFor='imperial'>
				Fahrenheit
				<input
					type='radio'
					name='units'
					id='imperial'
					onChange={(e) => setUnits(e.target.id)}
					checked={units === 'imperial'}
				/>
			</label>
		</form>
	)
}
