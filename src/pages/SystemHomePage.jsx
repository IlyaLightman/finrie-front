import React, { useState, useEffect, useCallback, useContext } from 'react'
import axios from '../utils/axios'

import UserContext from '../hooks/UserContext'
import useSystemAuth from '../hooks/authSystem.hook'

import Button from '../components/Button/Button'
import RedirectButton from '../components/RedirectButton/RedirectButton'

const SystemHomePage = () => {
	const { user } = useContext(UserContext)
	const { setSystemContext, logoutSystem } = useSystemAuth()

	const [freeIssuance, setFreeIssuance] = useState(0)
	const [unregisteredFreeIssuance, setUnregisteredFreeIssuance] = useState(null)

	const getFreeIssuance = useCallback(async () => {
		try {
			const freeIssuance = (await axios.get('/system/issuance')).data
			const unregisteredFreeIssuance = (await axios.get('/system/unregisteredIssuance')).data

			setFreeIssuance(freeIssuance)
			if (freeIssuance != unregisteredFreeIssuance) {
				setUnregisteredFreeIssuance(unregisteredFreeIssuance)
			}
		} catch (err) {
			console.log(err)
		}
	})

	useEffect(() => {
		const asyncGetFreeIssuance = async () => {
			await getFreeIssuance()
		}
		asyncGetFreeIssuance()
		setSystemContext()
	}, [])

	return (
		<>
			<p>System {user && <b>{user.name}</b>} Homepage</p>
			{freeIssuance !== -1 ? (
				<p>
					Free issuance: {freeIssuance} {unregisteredFreeIssuance && `(${unregisteredFreeIssuance})`}
				</p>
			) : (
				<p>Unlimited issuance</p>
			)}
			<RedirectButton title='System info' path='/system_info' />
			<RedirectButton title='Send coins to user' path='/transaction' />
			{/* <Button title='Distribute coins' /> */}
			<RedirectButton title='Members' path='/system_members' />
			<Button title='Logout' onClick={async () => await logoutSystem()} />
		</>
	)
}

export default SystemHomePage
