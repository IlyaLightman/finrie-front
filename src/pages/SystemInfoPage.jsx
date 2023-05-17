import React, { useContext } from 'react'

import UserContext from '../hooks/UserContext'
import BackButton from '../components/BackButton/BackButton'

const SystemInfoPage = () => {
	const { user } = useContext(UserContext)

	return (
		<>
			<p>
				System <b>{user?.name}</b>
			</p>
			<p>Description: {user?.description}</p>
			<p>Issuance restriction: {user?.issuance_restriction}</p>
			<p>Issuance rule: {user?.issuance_rule}</p>
			<BackButton />
		</>
	)
}

export default SystemInfoPage
