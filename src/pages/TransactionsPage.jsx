import React, { useState, useEffect, useCallback } from 'react'
import dayjs from 'dayjs'

import axios from '../utils/axios'

import List from '../containers/List/List'
import BackButton from '../components/BackButton/BackButton'

const TransactionItem = ({ value, form, created_at }) => {
	const isDeposit = form === 'deposit'

	return (
		<>
			<p style={{ color: isDeposit ? 'green' : 'red' }}>
				{isDeposit ? '+' : '-'}
				{value}
			</p>
			<p>{dayjs(created_at).format('DD.MM.YYYY HH:mm:ss')}</p>
		</>
	)
}

const TransactionsPage = () => {
	const [transactions, setTransactions] = useState([])
	const [poolTransactions, setPoolTransactions] = useState([])

	const getTransactions = useCallback(async () => {
		try {
			const response = await axios.get('/tx')
			setTransactions(response.data)
		} catch (err) {
			console.log(err)
		}
	})

	const getPoolTransactions = useCallback(async () => {
		try {
			const response = await axios.get('/pool_tx')
			setPoolTransactions(response.data)
		} catch (err) {
			console.log(err)
		}
	})

	useEffect(() => {
		const asyncGetTransactions = async () => {
			await getTransactions()
			await getPoolTransactions()
		}
		asyncGetTransactions()
	}, [])

	return (
		<>
			<p>Transactions:</p>
			{transactions?.length ? (
				<List rows={transactions} Component={TransactionItem} />
			) : (
				<p style={{ color: 'gray' }}>There aren't transactions yet</p>
			)}
			<p>Unregistered Transactions:</p>
			{poolTransactions?.length ? (
				<List rows={poolTransactions} Component={TransactionItem} />
			) : (
				<p style={{ color: 'gray' }}>There aren't pool transactions yet</p>
			)}
			<BackButton />
		</>
	)
}

export default TransactionsPage
