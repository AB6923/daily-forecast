import React, { useState } from 'react'

export const Form = () => {
	const [locationInput, setLocationInput] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		// alert(locationInput)
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
						onChange={(e) => setLocationInput(e.target.value)}
						required
					/>
					<input type='submit' />
				</label>
			</form>
		</aside>
	)
}
