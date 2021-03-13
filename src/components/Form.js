import React, { useContext, useState } from 'react'
import { WeatherContext } from '../contexts/WeatherContext'
import { toTitleCase } from '../utils/toTitleCase'

export const Form = () => {
	const { setLocation } = useContext(WeatherContext)
	const [locationInput, setLocationInput] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		setLocation(locationInput)
		setLocationInput('')
	}

	return (
		<aside>
			<form onSubmit={handleSubmit}>
				<label>
					Get forcast for
					<input
						type='text'
						placeholder='New York'
						value={locationInput}
						onChange={(e) => setLocationInput(toTitleCase(e.target.value))}
						required
					/>
					<input type='submit' />
				</label>
			</form>
		</aside>
	)
}
