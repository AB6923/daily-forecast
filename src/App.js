import React from 'react'
import { WeatherContextProvider } from './contexts/WeatherContext'
import { Layout } from './components'

import 'normalize.css'
import './sass/index.scss'

export default function App() {
	return (
		<WeatherContextProvider>
			<Layout>main</Layout>
		</WeatherContextProvider>
	)
}
