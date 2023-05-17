import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header/header'
import Container from './containers/Container/Container'

import useSetUser from './hooks/useSetUser'
import UserContext from './hooks/UserContext'

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

const App = () => {
	const { user, setUser } = useSetUser()

	return (
		<UserContext.Provider value={{ user, setUser }}>
			<Header />
			<AppPage>
				<Container>
					<RouterProvider router={router} />
				</Container>
			</AppPage>
		</UserContext.Provider>
	)
}

export default App
