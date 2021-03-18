import React from 'react'
import { toTitleCase } from '../utils'
import { WeatherIcon } from '../components'
import { Temp } from './Temp'

export const CurrentForecastCard = ({ weatherData }) => {
	const { current, day } = weatherData

	return weatherData.current ? (
		<article className='forecast-card'>
			<h2 className='forecast-day small'>{day}</h2>
			{/* current forecast ========== */}
			<section className='current-forecast'>
				<WeatherIcon iconRef={current.icon} />
				<div className='details'>
					<p className='current-temp'>
						<Temp temp={current.temp} />
					</p>
					<p className='small'>{toTitleCase(current.description)}</p>
					<p className='small'>
						Feels like: <Temp temp={current.feelsLike} />
					</p>
				</div>
			</section>
		</article>
	) : null
}
