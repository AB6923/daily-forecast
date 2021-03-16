import React from 'react'
import { WeatherContextProvider } from './contexts/WeatherContext'
import { Forcast, Loading, Splash } from './pages'
import { Footer, Form, PageHeader } from './components'

import 'normalize.css'
import './sass/index.scss'

export default function App() {
	return (
		<WeatherContextProvider>
			<div className='container'>
				<PageHeader />
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
