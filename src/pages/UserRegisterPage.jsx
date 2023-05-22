import React, { useState, useEffect } from 'react'

import useUserAuth from '../hooks/authUser.hook'

import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import BackButton from '../components/BackButton/BackButton'

const UserRegisterPage = () => {
	const { registerUser, loading, error, clearError } = useUserAuth()

	const [system_name, setSystemName] = useState()
	const [name, setUserName] = useState()
	const [password, setPassword] = useState()

	const [invalids, setInvalids] = useState({ name: false, password: false })

	useEffect(() => {
		clearError()
		if (name) {
			if (name.length >= 4) setInvalids({ ...invalids, name: false })
			else setInvalids({ ...invalids, name: true })
		}
	}, [name])

	useEffect(() => {
		clearError()
		if (password) {
			if (password.length >= 4) setInvalids({ ...invalids, password: false })
			else setInvalids({ ...invalids, password: true })
		}
	}, [password])

	return (
		<>
			<p>Register as User</p>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			{loading && <p>Loading....</p>}
			<Input title='System name' value={system_name} onChange={e => setSystemName(e.target.value)} />
			<Input title='Username' value={name} onChange={e => setUserName(e.target.value)} />
			<Input title='Password' value={password} onChange={e => setPassword(e.target.value)} />
			<Button
				title='Register'
				onClick={async () => await registerUser({ name, system_name, password })}
				disabled={!name || !password || Object.values(invalids).filter(Boolean).length > 0}
			/>
			<BackButton />
		</>
	)
}

export default UserRegisterPage
