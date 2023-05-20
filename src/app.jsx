import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header/header'
import Container from './containers/Container/Container'

import useSetUser from './hooks/setUser.hook'
import UserContext from './hooks/UserContext'
import GuardRoute from './guards/GuardRoute'

import { AppPage } from './App.style'
import IndexPage from './pages/IndexPage'

import SystemRegisterPage from './pages/SystemRegisterPage'
import SystemLoginPage from './pages/SystemLoginPage'
import SystemHomePage from './pages/SystemHomePage'
import SystemInfoPage from './pages/SystemInfoPage'
import SystemMembersPage from './pages/SystemMembersPage'

import UserRegisterPage from './pages/UserRegisterPage'
import UserLoginPage from './pages/UserLoginPage'
import UserHomePage from './pages/UserHomePage'

import TransactionPage from './pages/TransactionPage'
import TransactionsPage from './pages/TransactionsPage'

const App = () => {
	const { user, setUser } = useSetUser(null)

	return (
		<UserContext.Provider value={{ user, setUser }}>
			<Header />
			<AppPage>
				<Container>
					<BrowserRouter>
						<Routes>
							<Route path='/' element={<IndexPage />} />
							<Route path='/register_system' element={<SystemRegisterPage />} />
							<Route path='/login_system' element={<SystemLoginPage />} />
							<Route
								path='system_home'
								element={
									<GuardRoute role='system'>
										<SystemHomePage />
									</GuardRoute>
								}
							/>
							<Route path='/system_info' element={<SystemInfoPage />} />
							<Route
								path='/system_members'
								element={
									<GuardRoute role='system'>
										<SystemMembersPage />
									</GuardRoute>
								}
							/>

							<Route path='/register_user' element={<UserRegisterPage />} />
							<Route path='/login_user' element={<UserLoginPage />} />
							<Route
								path='/user_home'
								element={
									<GuardRoute role='user'>
										<UserHomePage />
									</GuardRoute>
								}
							/>

							<Route
								path='/transaction'
								element={
									<GuardRoute role='*'>
										<TransactionPage />
									</GuardRoute>
								}
							/>
							<Route
								path='/transactions'
								element={
									<GuardRoute role='user'>
										<TransactionsPage />
									</GuardRoute>
								}
							/>
						</Routes>
					</BrowserRouter>
				</Container>
			</AppPage>
		</UserContext.Provider>
	)
}

export default App
