import React from 'react'
import './partiallyCloudyIcon.scss'

export const PartiallyCloudyIcon = () => {
	return (
		<div className='weather-icon partially-cloudy'>
			<div>
				<div className='sun'>
					<div className='beam'></div>
					<div className='beam'></div>
					<div className='beam'></div>
					<div className='beam'></div>
					<div className='beam'></div>
					<div className='beam'></div>
					<div className='beam'></div>
					<div className='beam'></div>
				</div>
				<div className='cloud'></div>
			</div>
		</div>
	)
}
