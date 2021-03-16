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
	) : (
		<article className='forcast-card'>
			<h2 className='forcast-day small'>{day}</h2>
			<section className='upcoming-forcast'>
				{/* averages ========== */}
				<section className='forcast-averages'>
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
				<section className='forcast-details'>
					{/* quarterly ========== */}
					<section className='forcast-quarterly'>
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
					<section className='forcast-feels-like'>
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
	)
}
