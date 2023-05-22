import { useState, useContext, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from '../utils/axios'
import UserContext from './UserContext'

// system, user
const useAuth = role => {
	const { setUser } = useContext(UserContext)
	const navigate = useNavigate()

	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const setContext = useCallback(async () => {
		try {
			const access_token = localStorage.getItem('access_token')
			const res = await axios.get(`/${role}`, {
				headers: { Authorization: `Bearer ${access_token}` }
			})

			setUser({ role, ...res.data })
			navigate(`/${role}_home`)
		} catch (err) {
			console.log(err)
			setError(err.message)
		}
	})

	const register = useCallback(async data => {
		setLoading(true)

		try {
			await axios.post(`/${role}`, data)
			await loginSystem(data)
		} catch (err) {
			console.log(err)
			setError(err.response?.data?.message || err.response?.data?.error || err.message)
		}

		setLoading(false)
	})

	const login = useCallback(async data => {
		setLoading(true)

		try {
			const access_token = await axios.post(`/${role}/login`, data)
			localStorage.setItem('access_token', access_token.data.accessToken)
			localStorage.setItem('role', role)
			await setContext()
		} catch (err) {
			console.log(err)
			setError(err.response?.data?.message || err.response?.data?.error || err.message)
		}

		setLoading(false)
	})

	const logout = useCallback(() => {
		localStorage.removeItem('access_token')
		localStorage.removeItem('role')
		setUser(null)
		navigate('/')
	})

	const clearError = useCallback(() => setError(null))

	return {
		setContext,
		register,
		login,
		logout,
		loading,
		error,
		clearError
	}
}

export default useAuth
