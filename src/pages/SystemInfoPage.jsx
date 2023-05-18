import React, { useState, useEffect, useCallback } from 'react'

import axios from '../utils/axios'

import BackButton from '../components/BackButton/BackButton'

const SystemInfoPage = () => {
	const [system, setSystem] = useState()

	const getSystem = useCallback(async () => {
		try {
			const response = await axios.get('/system')
			setSystem(response.data)
		} catch (err) {
			console.log(err)
		}
	})

	useEffect(() => {
		getSystem()
	})

	return (
		<>
			<p>
				System <b>{system?.name}</b>
			</p>
			<p>Description: {system?.description}</p>
			<p>Issuance restriction: {system?.issuance_restriction}</p>
			<p>Issuance rule: {system?.issuance_rule}</p>
			<BackButton />
		</>
	)
}

export default SystemInfoPage
