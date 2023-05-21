import React, { useState, useEffect } from 'react'

import useSystemAuth from '../hooks/authSystem.hook'

import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import BackButton from '../components/BackButton/BackButton'

const SystemLoginPage = () => {
	const { loginSystem, loading, error, clearError } = useSystemAuth()

	const [name, setName] = useState()
	const [password, setPassword] = useState()

	useEffect(() => {
		clearError()
	}, [name, password])

	return (
		<>
			<p>Login as System</p>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			{loading && <p>Loading....</p>}
			<Input title='Name' value={name} onChange={e => setName(e.target.value)} />
			<Input title='Password' value={password} onChange={e => setPassword(e.target.value)} />
			<Button title='Login' onClick={async () => await loginSystem({ name, password })} />
			<BackButton />
		</>
	)
}

export default SystemLoginPage
