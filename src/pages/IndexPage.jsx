import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

import useSystemAuth from '../hooks/authSystem.hook'
import useUserAuth from '../hooks/authUser.hook'

import RedirectButton from '../components/RedirectButton/RedirectButton'

const IndexPage = () => {
	const { setSystemContext } = useSystemAuth()
	const { setUserContext } = useUserAuth()

	useEffect(() => {
		const role = localStorage.getItem('role')

		const setContext = async () => {
			if (role && role === 'system') await setSystemContext()
			if (role && role === 'user') await setUserContext()
		}
		setContext()
	})

	return (
		<>
			<p>Welcome to Finrie!</p>
			<RedirectButton title='Register System' path='/register_system' />
			<RedirectButton title='Login as System' path='/login_system' />
			<RedirectButton title='Register User' path='/register_user' />
			<RedirectButton title='Login as User' path='/login_user' />
		</>
	)
}

export default IndexPage
