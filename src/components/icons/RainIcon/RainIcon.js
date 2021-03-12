import React from 'react'
import './rainIcon.scss'

export const RainIcon = () => {
	return (
		<div className='weather-icon rain-icon'>
			<div>
				<div className='sun'>
					<div className='beam'> </div>
					<div className='beam'> </div>
					<div className='beam'> </div>
					<div className='beam'> </div>
					<div className='beam'> </div>
					<div className='beam'> </div>
					<div className='beam'> </div>
					<div className='beam'> </div>
				</div>
				<div className='cloud'>
					<div className='cloud-copy' />
					<div className='rain'>
						<div className='drop' />
						<div className='drop' />
						<div className='drop' />
						<div className='drop' />
						<div className='drop' />
						<div className='drop' />
						<div className='drop' />
						<div className='drop' />
						<div className='drop' />
						<div className='drop' />
					</div>
				</div>
			</div>
		</div>
	)
}
