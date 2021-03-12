import React from 'react'
import { WeatherContextProvider } from './contexts/WeatherContext'
import { Forcast, Form, Loading, Splash } from './components'

import 'normalize.css'
import './sass/index.scss'

export default function App() {
	return (
		<WeatherContextProvider>
			<div className='container'>
				<main>
					<Splash />
					<Loading />
					<Forcast />
				</main>
				<Form />
			</div>
		</WeatherContextProvider>
	)
}
