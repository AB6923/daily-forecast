import React from 'react'
import { WeatherContextProvider } from './contexts/WeatherContext'
import { Forcast, Form } from './components'

import 'normalize.css'
import './sass/index.scss'

export default function App() {
	return (
		<div className='container'>
			<WeatherContextProvider>
				<main>
					<Forcast />
				</main>
				<Form />
			</WeatherContextProvider>
		</div>
	)
}
