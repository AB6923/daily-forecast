import React from 'react'
import { toTitleCase } from '../utils'
import { WeatherIcon } from '../components'
import { Temp } from './Temp'

export const CurrentForcastCard = ({ weatherData }) => {
	const { current, day } = weatherData

	return weatherData.current ? (
		<article className='forcast-card'>
			<h2 className='forcast-day small'>{day}</h2>
			{/* current forcast ========== */}
			<section className='current-forcast'>
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
