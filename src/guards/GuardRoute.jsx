import React from 'react'
import { Navigate } from 'react-router-dom'

import UserContext from '../hooks/UserContext'

const GuardRoute = ({ role, children }) => {
	const { user } = React.useContext(UserContext)

	if (user?.role === role) {
		return children
	} else {
		return <Navigate to='/' />
	}
}

export default GuardRoute
