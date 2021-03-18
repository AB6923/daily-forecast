import React from 'react'
import { toTitleCase } from '../utils'
import { WeatherIcon } from '../components'
import { Temp } from './Temp'

export const ForecastCard = ({ weatherData }) => {
	const { day, description, feelsLike, icon, temp } = weatherData

	return !weatherData.current ? (
		<article className='forecast-card'>
			<h2 className='forecast-day small'>{day}</h2>
			<section className='upcoming-forecast'>
				{/* averages ========== */}
				<section className='forecast-averages'>
					<WeatherIcon iconRef={icon} />
					<div className='details'>
						<h3>Averages</h3>
						<p className='small'>{toTitleCase(description)}</p>
						<p className='small'>
							Min: <Temp temp={temp.min} />
						</p>
						<p className='small'>
							Max: <Temp temp={temp.max} />
						</p>
					</div>
				</section>
				<section className='forecast-details'>
					{/* quarterly ========== */}
					<section className='forecast-quarterly'>
						<h3>Quarterly</h3>
						<p className='small'>
							Morn: <Temp temp={temp.morn} />
						</p>
						<p className='small'>
							Day: <Temp temp={temp.day} />
						</p>
						<p className='small'>
							Eve: <Temp temp={temp.eve} />
						</p>
						<p className='small'>
							Night: <Temp temp={temp.night} />
						</p>
					</section>
					{/* feels like ========== */}
					<section className='forecast-feels-like'>
						<h3>Feels Like</h3>
						<p className='small'>
							Morn: <Temp temp={feelsLike.morn} />
						</p>
						<p className='small'>
							Day: <Temp temp={feelsLike.day} />
						</p>
						<p className='small'>
							Eve: <Temp temp={feelsLike.eve} />
						</p>
						<p className='small'>
							Night: <Temp temp={feelsLike.night} />
						</p>
					</section>
				</section>
			</section>
		</article>
	) : null
}
