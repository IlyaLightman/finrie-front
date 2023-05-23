import React, { useState, useEffect } from 'react'

import useSystemAuth from '../hooks/authSystem.hook'

import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import BackButton from '../components/BackButton/BackButton'

const issuance_types = {
	Limit: 'limit',
	Unlimited: 'unlimited'
}

const SystemRegisterPage = () => {
	const { registerSystem, loading, error, clearError } = useSystemAuth()

	const [name, setName] = useState()
	const [description, setDescription] = useState()
	const [issuanceType, setIssuanceType] = useState('limit')
	const [issuanceLimit, setIssuanceLimit] = useState()
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
			<p>Register as System</p>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			{loading && <p>Loading....</p>}
			<Input title='Name' value={name} onChange={e => setName(e.target.value)} invalid={invalids.name} />
			<Input title='Description' value={description} onChange={e => setDescription(e.target.value)} />
			<Input
				title='Issuance type'
				value={issuanceType}
				select={Object.keys(issuance_types)}
				onChange={e => setIssuanceType(issuance_types[e.target.value])}
			/>
			{issuanceType === 'limit' && (
				<Input title='Issuance limit' value={issuanceLimit} onChange={e => setIssuanceLimit(e.target.value)} />
			)}
			<Input
				title='Password'
				value={password}
				onChange={e => setPassword(e.target.value)}
				invalid={invalids.password}
			/>
			<Button
				title='Register'
				onClick={async () =>
					await registerSystem({
						name,
						description,
						issuance_restriction: issuanceType,
						issuance_limit: issuanceLimit,
						password
					})
				}
				disabled={!name || !password || !description || Object.values(invalids).filter(Boolean).length > 0}
			/>
			<BackButton />
		</>
	)
}

export default SystemRegisterPage
