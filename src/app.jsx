import React from 'react'

import Header from './components/Header/header'
import Container from './containers/Container/Container'

import { AppPage } from './App.style'
import Button from './components/Button/Button'

const App = () => (
	<div>
		<Header />
		<AppPage>
			<Container>
				<p>Welcome to Finrie!</p>
				<Button title='Click me!' />
				<Button title='Click me!' />
				<Button title='Click me!' />
				<Button title='Click me!' />
			</Container>
		</AppPage>
	</div>
)

export default App
