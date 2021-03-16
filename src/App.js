import React from 'react'
import { WeatherContextProvider } from './contexts/WeatherContext'
import { Forcast, Loading, Splash } from './pages'
import { Header, Footer } from './components'

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
				<Footer />
			</div>
		</WeatherContextProvider>
	)
}
