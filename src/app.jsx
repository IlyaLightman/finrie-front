import React from 'react'

import Header from './components/Header/header'
import Container from './containers/Container/Container'

import { AppPage } from './App.style'
import IndexPage from './pages/IndexPage'
import RegisterPage from './pages/SystemRegisterPage'

const App = () => (
	<div>
		<Header />
		<AppPage>
			<Container>
				<IndexPage />
			</Container>
		</AppPage>
	</div>
)

export default App
