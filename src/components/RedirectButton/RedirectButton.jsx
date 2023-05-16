import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../Button/Button'

const RedirectButton = ({ title, path }) => {
	const navigate = useNavigate()

	return (
		<Button
			title={title}
			onClick={() => {
				navigate(path)
			}}
		/>
	)
}

export default RedirectButton
