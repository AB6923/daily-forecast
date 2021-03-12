import React, { createContext, useState, useEffect } from 'react'

export const WeatherContext = createContext()

export const WeatherContextProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false)
	const [location, setLocation] = useState('')
	const [weatherData, setWeatherData] = useState()

	useEffect(() => {
		const getWeatherData = async () => {
			if (!location) return
			setIsLoading(true)

			const apiKey = process.env.REACT_APP_API_KEY
			const fetchBylocation = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`

			await fetch(fetchBylocation)
				.then((res) => res.json())
				.then((initialData) => {
					const lat = initialData.coord.lat
					const lon = initialData.coord.lon
					const cityName = initialData.name
					const country = initialData.sys.country
					const fetchByLatLon = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=$hourly,minutely&appid=${apiKey}`

					fetch(fetchByLatLon)
						.then((res) => res.json())
						.then((data) => {
							setWeatherData({ location: cityName, country, ...data })
							setIsLoading(false)
						})
						.catch((err) => console.error(err))
				})
				.catch((err) => console.error(err))
		}

		getWeatherData()
	}, [location])

	return (
		<WeatherContext.Provider value={{ setLocation, weatherData, isLoading }}>
			{children}
		</WeatherContext.Provider>
	)
}
