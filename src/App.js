import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { WeatherContextProvider } from './contexts/WeatherContext'
import { Forecast, Loading, Splash } from './pages'
import { Header } from './components'

import 'normalize.css'
import './sass/index.scss'

export default function App() {
	return (
		<HelmetProvider>
			<WeatherContextProvider>
				<div className='container'>
					<Helmet>
						<title>Daily Forecast</title>
						<meta
							name='description'
							content='A basic weather app that allows a user to get the current and upcoming forecast for any location in the world'
						/>
					</Helmet>
					<Header />
					<main>
						<Splash />
						<Loading />
						<Forecast />
					</main>
					<footer>
						by{' '}
						<a href='https://aexcode.com' target='_blank' rel='noreferrer'>
							aexcode
						</a>
					</footer>
				</div>
			</WeatherContextProvider>
		</HelmetProvider>
	)
}
