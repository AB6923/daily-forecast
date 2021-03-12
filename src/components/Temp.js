import React from 'react'

export const Temp = ({ temp, country }) => {
	const toCelsius = (num) => {
		return ((num - 32) * 5) / 9
	}

	const isImperial = country === 'US'
	const formattedTemp = isImperial
		? Math.round(temp)
		: Math.round(toCelsius(temp))

	return (
		<p className='temp'>
			{formattedTemp}
			<span className='degrees'>{isImperial ? '°F' : '°C'}</span>
		</p>
	)
}
