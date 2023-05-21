import React, { useState, useEffect } from 'react'

import useUserAuth from '../hooks/authUser.hook'

import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import BackButton from '../components/BackButton/BackButton'

const UserLoginPage = () => {
	const { loginUser, loading, error, clearError } = useUserAuth()

	const [system_name, setSystemName] = useState()
	const [name, setUserName] = useState()
	const [password, setPassword] = useState()

	useEffect(() => {
		clearError()
	}, [name, system_name, password])

	return (
		<>
			<p>Login as User</p>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			{loading && <p>Loading....</p>}
			<Input title='System name' value={system_name} onChange={e => setSystemName(e.target.value)} />
			<Input title='Username' value={name} onChange={e => setUserName(e.target.value)} />
			<Input title='Password' value={password} onChange={e => setPassword(e.target.value)} />
			<Button title='Login' onClick={async () => await loginUser({ name, system_name, password })} />
			<BackButton />
		</>
	)
}

export default UserLoginPage
