import React from 'react'

export const ForcastCard = ({ weatherData }) => {
	const { description } = weatherData
	console.log(weatherData)
	return (
		<article className='forcast-card'>
			<small>Monday</small>

			<p>{description}</p>
		</article>
	)
}
