import React from 'react'

import { ButtonStyle } from './Button.style'

const Button = ({ title, onClick }) => (
	<ButtonStyle onClick={onClick}>
		<p>{title}</p>
	</ButtonStyle>
)

export default Button
