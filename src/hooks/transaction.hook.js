import { useState, useCallback } from 'react'

import axios from '../utils/axios'

const useTransaction = () => {
	const [transactionError, setTransactionError] = useState()

	const sendCoins = useCallback(async (username, value) => {
		try {
			const user_response = await axios.get(`/user/${username}?findBy=name`)
			if (!user_response.data) {
				setTransactionError('User not found')
				return
			}

			const response = await axios.post('/pool_tx', {
				receiver_user_id: user_response.data.user_id,
				value
			})
			return response.data
		} catch (err) {
			setTransactionError(err.response?.data?.message || 'Something went wrong')
			console.log(err)
		}
	})

	const clearTransactionError = useCallback(() => {
		setTransactionError(null)
	})

	return { sendCoins, transactionError, clearTransactionError }
}

export default useTransaction
