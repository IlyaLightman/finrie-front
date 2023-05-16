import React, { useState } from 'react'

import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import BackButton from '../components/BackButton/BackButton'

const SystemLoginPage = () => {
	const [name, setName] = useState()
	const [password, setPassword] = useState()

	return (
		<>
			<p>Login as System</p>
			<Input title='Name' value={name} onChange={e => setName(e.target.value)} />
			<Input title='Password' value={password} onChange={e => setPassword(e.target.value)} />
			<Button title='Login' />
			<BackButton />
		</>
	)
}

export default SystemLoginPage
