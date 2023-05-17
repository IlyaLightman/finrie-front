import { useState, useContext, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from '../utils/axios'
import UserContext from './UserContext'

const useUserAuth = () => {
	const { setUser } = useContext(UserContext)
	const navigate = useNavigate()

	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const setUserContext = useCallback(async () => {
		try {
			const access_token = localStorage.getItem('access_token')
			const res = await axios.get('/user', {
				headers: { Authorization: `Bearer ${access_token}` }
			})

			setUser({ role: 'user', ...res.data })
			navigate('/user_home')
		} catch (err) {
			console.log(err)
			setError(err.message)
		}
	})

	const registerUser = useCallback(async data => {
		setLoading(true)
		const { name, system_name, password } = data

		console.log()
		try {
			info = await axios.post('/user', {
				name,
				system_name,
				password
			})
			await loginUser({ name, system_name, password })
		} catch (err) {
			console.log('err', err)
			setError(err.response?.data?.message || err.response?.data?.error || err.message)
		}

		setLoading(false)
	})

	const loginUser = useCallback(async data => {
		setLoading(true)
		const { name, system_name, password } = data

		try {
			const access_token = await axios.post('/user/login', {
				name,
				system_name,
				password
			})
			localStorage.setItem('access_token', access_token.data.accessToken)
			await setUserContext()
		} catch (err) {
			console.log(err)
			setError(err.response?.data?.message || err.response?.data?.error || err.message)
		}

		setLoading(false)
	})

	const logoutUser = useCallback(() => {
		localStorage.removeItem('access_token')
		setUser(null)
		navigate('/')
	})

	const clearError = useCallback(() => setError(null))

	return {
		setUserContext,
		registerUser,
		loginUser,
		logoutUser,
		loading,
		error,
		clearError
	}
}

export default useUserAuth
