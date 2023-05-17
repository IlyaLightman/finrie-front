import React, { useState, useEffect, useCallback, useContext } from 'react'
import axios from '../utils/axios'

import UserContext from '../hooks/UserContext'
import useSystemAuth from '../hooks/authSystem.hook'

import Button from '../components/Button/Button'
import RedirectButton from '../components/RedirectButton/RedirectButton'

const SystemHomePage = () => {
	const { user } = useContext(UserContext)
	const { logoutSystem } = useSystemAuth()

	const [freeIssuance, setFreeIssuance] = useState(0)

	const getFreeIssuance = useCallback(async () => {
		try {
			const response = await axios.get('/system/issuance')
			setFreeIssuance(response.data)
		} catch (err) {
			console.log(err)
		}
	})

	useEffect(() => {
		const asyncGetFreeIssuance = async () => {
			await getFreeIssuance()
		}
		asyncGetFreeIssuance()
	})

	return (
		<>
			<p>System {user && <b>{user.name}</b>} Home Page</p>
			<p>Free issuance: {freeIssuance}</p>
			<RedirectButton title='System info' path='/system_info' />
			<Button title='Send coins to user' />
			<Button title='Distribute coins' />
			<Button title='Members' />
			<Button title='Logout' onClick={async () => await logoutSystem()} />
		</>
	)
}

export default SystemHomePage
