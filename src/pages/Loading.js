import React, { useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext'

export const Loading = () => {
	const { isLoading } = useContext(WeatherContext)
	return isLoading && <div>LOADING...</div>
}
