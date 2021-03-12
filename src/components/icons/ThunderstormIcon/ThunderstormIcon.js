import React from 'react'
import './thunderstormIcon.scss'

export const ThunderstormIcon = () => {
	return (
		<div className='weather-icon thunderstorm-icon'>
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
					<div className='lightning' />
				</div>
			</div>
		</div>
	)
}
