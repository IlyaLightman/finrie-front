import { useState, useContext, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from '../utils/axios'
import UserContext from './UserContext'

const useSystemAuth = () => {
	const { setUser } = useContext(UserContext)
	const navigate = useNavigate()

	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const setSystemContext = useCallback(async () => {
		try {
			const access_token = localStorage.getItem('access_token')
			const res = await axios.get('/system', {
				headers: { Authorization: `Bearer ${access_token}` }
			})

			setUser({ role: 'system', ...res.data })
			navigate('/system_home')
		} catch (err) {
			console.log(err)
			setError(err.message)
		}
	})

	const registerSystem = useCallback(async data => {
		setLoading(true)
		const { name, password } = data

		console.log()
		try {
			info = await axios.post('/system', {
				name,
				description: 'Description',
				password,
				issuance_restriction: 'limit',
				issuance_current_limit: 1000,
				issuance_rule: 'simple'
			})
			await loginSystem({ name, password })
		} catch (err) {
			console.log('err', err)
			setError(err.response?.data?.message || err.response?.data?.error || err.message)
		}

		setLoading(false)
	})

	const loginSystem = useCallback(async data => {
		setLoading(true)
		const { name, password } = data

		try {
			const access_token = await axios.post('/system/login', {
				name,
				password
			})
			localStorage.setItem('access_token', access_token.data.accessToken)
			await setSystemContext()
		} catch (err) {
			console.log(err)
			setError(err.response?.data?.message || err.response?.data?.error || err.message)
		}

		setLoading(false)
	})

	const logoutSystem = useCallback(() => {
		localStorage.removeItem('access_token')
		setUser(null)
		navigate('/')
	})

	const clearError = useCallback(() => setError(null))

	return {
		setSystemContext,
		registerSystem,
		loginSystem,
		logoutSystem,
		loading,
		error,
		clearError
	}
}

export default useSystemAuth
