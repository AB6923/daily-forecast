import React, { createContext, useState } from 'react'

export const WeatherContext = createContext()

export const WeatherContextProvider = ({ children }) => {
	const [location, setLocation] = useState('')
	const [weatherData, setWeatherData] = useState([])

	return (
		<WeatherContext.Provider value={{ location, setLocation, weatherData }}>
			{children}
		</WeatherContext.Provider>
	)
}
