import React from 'react'
import { WeatherContextProvider } from './contexts/WeatherContext'
import { Forcast, Loading, Splash } from './pages'
import { Header } from './components'

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
				<footer>
					by{' '}
					<a href='https://aexcode.com' target='_blank'>
						aexcode
					</a>
				</footer>
			</div>
		</WeatherContextProvider>
	)
}
