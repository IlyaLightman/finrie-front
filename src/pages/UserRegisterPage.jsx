import React, { useState } from 'react'

import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import BackButton from '../components/BackButton/BackButton'

const UserRegisterPage = () => {
	const [system_name, setSystemName] = useState()
	const [user_name, setUserName] = useState()
	const [password, setPassword] = useState()

	return (
		<>
			<p>Register as User</p>
			<Input
				title='System'
				value={system_name}
				onChange={e => setSystemName(e.target.value)}
			/>
			<Input title='Username' value={user_name} onChange={e => setUserName(e.target.value)} />
			<Input title='Password' value={password} onChange={e => setPassword(e.target.value)} />
			<Button title='Register' />
			<BackButton />
		</>
	)
}

export default UserRegisterPage
