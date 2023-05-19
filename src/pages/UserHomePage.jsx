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

	const getBalance = useCallback(async () => {
		try {
			const response = await axios.get('/user/balance')
			setBalance(response.data)
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
			<p>Balance: {balance}</p>
			<RedirectButton title='System info' path='/system_info' />
			<RedirectButton title='Send coins' path='/transaction' />
			<Button title='My transactions' />
			<Button title='Logout' onClick={async () => await logoutUser()} />
		</>
	)
}

export default UserHomePage
