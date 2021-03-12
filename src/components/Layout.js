import React from 'react'
import { Form } from './Form'

export const Layout = ({ children }) => {
	return (
		<div className='container'>
			<header>header</header>
			<main>{children}</main>
			<Form />
			<footer>footer</footer>
		</div>
	)
}
