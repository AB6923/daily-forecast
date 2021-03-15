import React from 'react'
import { toTitleCase } from '../utils'
import { WeatherIcon } from '../components'
import { Temp } from './Temp'

export const ForcastCard = ({ weatherData }) => {
	const { day, description, feelsLike, icon, temp } = weatherData

	return weatherData ? (
		<article className='forcast-card'>
			<h1 className='forcast-day small'>{day}</h1>
			{/* {weatherData.current && (
				<section className='current-forcast'>
					<WeatherIcon iconRef={current.icon} />
					<p>
						Current temp: <Temp temp={current.temp} />
					</p>
					<p>{toTitleCase(current.description)}</p>
				</section>
			)} */}
			<section className='upcoming-forcast'>
				<div>
					<section>
						<WeatherIcon iconRef={icon} />
						<p>{toTitleCase(description)}</p>
						<p>
							Min: <Temp temp={temp.min} />
						</p>
						<p>
							Max: <Temp temp={temp.max} />
						</p>
					</section>
					<section>
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
					<section>
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
				</div>
			</section>
		</article>
	) : null
}
