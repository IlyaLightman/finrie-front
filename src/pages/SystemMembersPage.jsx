import React, { useState, useEffect, useCallback, useContext } from 'react'
import dayjs from 'dayjs'

import axios from '../utils/axios'
import UserContext from '../hooks/UserContext'

import List from '../containers/List/List'
import BackButton from '../components/BackButton/BackButton'

const MemberItem = ({ name, registered_at }) => (
	<>
		<b>{name}</b>
		<p>{dayjs(registered_at).format('MMM D, YYYY HH:mm')}</p>
	</>
)

const SystemMembersPage = () => {
	const [members, setMembers] = useState([])
	const { user } = useContext(UserContext)

	const getMembers = useCallback(async () => {
		try {
			const response = await axios.get('/user/users')
			setMembers(response.data)
		} catch (err) {
			console.log(err)
		}
	})

	useEffect(() => {
		const asyncGetMembers = async () => {
			await getMembers()
		}
		asyncGetMembers()
	}, [])

	return (
		<>
			<p>
				System {user && <b>{user.name}</b>} Members ({members?.length || 0}):
			</p>
			{members ? (
				<List rows={members} Component={MemberItem} columns={['Name', 'Registered at']} rowsPerPage={5} />
			) : (
				<p>There aren't members yet</p>
			)}
			<BackButton />
		</>
	)
}

export default SystemMembersPage
