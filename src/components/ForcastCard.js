import React from 'react'
import { toTitleCase } from '../utils'
import { WeatherIcon } from '../components'
import { Temp } from './Temp'

export const ForcastCard = ({ weatherData }) => {
	const { current, day, description, feelsLike, icon, temp } = weatherData

	return weatherData.current ? (
		<article className='forcast-card'>
			<h2 className='forcast-day small'>{day}</h2>
			{/* current forcast ========== */}
			<section className='current-forcast'>
				<WeatherIcon iconRef={current.icon} />
				<p>
					Current temp: <Temp temp={current.temp} />
				</p>
				<p>{toTitleCase(current.description)}</p>
			</section>
		</article>
	) : (
		<article className='forcast-card'>
			<h2 className='forcast-day small'>{day}</h2>
			<section className='upcoming-forcast'>
				{/* averages ========== */}
				<section className='forcast-averages'>
					<WeatherIcon iconRef={icon} />
					<p>{toTitleCase(description)}</p>
					<p>
						Min: <Temp temp={temp.min} />
					</p>
					<p>
						Max: <Temp temp={temp.max} />
					</p>
				</section>
				{/* quarterly ========== */}
				<section className='forcast-quarterly'>
					<h2>Quarterly</h2>
					<p>
						Morn: <Temp temp={temp.morn} />
					</p>
					<p>
						Day: <Temp temp={temp.day} />
					</p>
					<p>
						Eve: <Temp temp={temp.eve} />
					</p>
					<p>
						Night: <Temp temp={temp.night} />
					</p>
				</section>
				{/* feels like ========== */}
				<section className='forcast-feels-like'>
					<h2>Feels Like</h2>
					<p>
						Morn: <Temp temp={feelsLike.morn} />
					</p>
					<p>
						Day: <Temp temp={feelsLike.day} />
					</p>
					<p>
						Eve: <Temp temp={feelsLike.eve} />
					</p>
					<p>
						Night: <Temp temp={feelsLike.night} />
					</p>
				</section>
			</section>
		</article>
	)
}
