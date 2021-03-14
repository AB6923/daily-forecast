import React, { useContext, useState } from 'react'
import { WeatherContext } from '../contexts/WeatherContext'
import { toTitleCase } from '../utils'

export const Form = () => {
	const { setLocationInput } = useContext(WeatherContext)
	const [requestedLocation, setRequestedLocation] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		setLocationInput(requestedLocation)
		setRequestedLocation('')
	}

	return (
		<aside>
			<form onSubmit={handleSubmit}>
				<label>
					Get forcast for
					<input
						type='text'
						placeholder='New York'
						value={requestedLocation}
						onChange={(e) => setRequestedLocation(toTitleCase(e.target.value))}
						required
					/>
					<input type='submit' />
				</label>
			</form>
		</aside>
	)
}
