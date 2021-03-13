import React from 'react'
import { WeatherContextProvider } from './contexts/WeatherContext'
import { Footer, Forcast, Form, Header, Loading, Splash } from './components'

import 'normalize.css'
import './sass/index.scss'

export default function App() {
	return (
		<WeatherContextProvider>
			<div className='container'>
				<Header />
				<main>
					<Splash />
					<Loading />
					<Forcast />
				</main>
				<Form />
				<Footer />
			</div>
		</WeatherContextProvider>
	)
}
