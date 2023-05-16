import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header/header'
import Container from './containers/Container/Container'

import { AppPage } from './App.style'
import IndexPage from './pages/IndexPage'
import SystemRegisterPage from './pages/SystemRegisterPage'
import SystemLoginPage from './pages/SystemLoginPage'
import UserRegisterPage from './pages/UserRegisterPage'
import UserLoginPage from './pages/UserLoginPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <IndexPage />
	},
	{
		path: '/register_system',
		element: <SystemRegisterPage />
	},
	{
		path: '/login_system',
		element: <SystemLoginPage />
	},
	{
		path: '/register_user',
		element: <UserRegisterPage />
	},
	{
		path: '/login_user',
		element: <UserLoginPage />
	}
])

const App = () => (
	<div>
		<Header />
		<AppPage>
			<Container>
				<RouterProvider router={router} />
			</Container>
		</AppPage>
	</div>
)

export default App
