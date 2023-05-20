import React, { useState, useEffect, useCallback, useContext } from 'react'
import axios from '../utils/axios'

import UserContext from '../hooks/UserContext'
import useUserAuth from '../hooks/authUser.hook'

import Button from '../components/Button/Button'
import RedirectButton from '../components/RedirectButton/RedirectButton'

const UserHomePage = () => {
	const { user } = useContext(UserContext)
	const { setUserContext, logoutUser } = useUserAuth()

	const [balance, setBalance] = useState(0)
	const [unregisteredBalance, setUnregisteredBalance] = useState(null)

	const getBalance = useCallback(async () => {
		try {
			const balance = (await axios.get('/user/balance')).data
			const unregisteredBalance = (await axios.get('/user/unregisteredBalance')).data

			setBalance(balance)
			if (balance != unregisteredBalance) {
				setUnregisteredBalance(unregisteredBalance)
			}
		} catch (err) {
			console.log(err)
		}
	})

	useEffect(() => {
		const asyncGetBalance = async () => {
			await getBalance()
		}
		asyncGetBalance()
		setUserContext()
	}, [])

	return (
		<>
			<p>
				User {user && <b>{user.name}</b>} of System {user && <b>{user.system_name}</b>}
			</p>
			<p>
				Balance: {balance} {unregisteredBalance && `(${unregisteredBalance})`}
			</p>
			<RedirectButton title='System info' path='/system_info' />
			<RedirectButton title='Send coins' path='/transaction' />
			<RedirectButton title='My transactions' path='/transactions' />
			<Button title='Logout' onClick={async () => await logoutUser()} />
		</>
	)
}

export default UserHomePage
