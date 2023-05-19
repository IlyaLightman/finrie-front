import React, { useState, useEffect, useCallback } from 'react'

import BackButton from '../components/BackButton/BackButton'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import useTransaction from '../hooks/transaction.hook'

const TransactionPage = () => {
	const [username, setUsername] = useState()
	const [value, setValue] = useState()

	const { sendCoins, transactionError, clearTransactionError } = useTransaction()

	useEffect(() => {
		clearTransactionError()
	}, [username, value])

	const sendCoinsHandler = useCallback(async () => {
		await sendCoins(username, value)
	})

	return (
		<>
			<p>Send coins</p>
			{transactionError && <p style={{ color: 'red' }}>{transactionError}</p>}
			<Input title='Username' value={username} onChange={e => setUsername(e.target.value)} />
			<Input title='Value' value={value} onChange={e => setValue(e.target.value)} />
			<Button title='Send' onClick={sendCoinsHandler} />
			<BackButton />
		</>
	)
}

export default TransactionPage
