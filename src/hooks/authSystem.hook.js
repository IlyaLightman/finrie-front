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
		const { name, description, issuanceType, issuanceLimit, password } = data

		console.log()
		try {
			info = await axios.post('/system', {
				name,
				description,
				password,
				issuance_restriction: issuanceType,
				issuance_current_limit: issuanceLimit
			})
			await loginSystem({ name, password })
		} catch (err) {
			console.log(err)
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
			localStorage.setItem('role', 'system')
			await setSystemContext()
		} catch (err) {
			console.log(err)
			setError(err.response?.data?.message || err.response?.data?.error || err.message)
		}

		setLoading(false)
	})

	const logoutSystem = useCallback(() => {
		localStorage.removeItem('access_token')
		localStorage.removeItem('role')
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
