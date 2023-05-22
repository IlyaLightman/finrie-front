import React from 'react'

import { ButtonStyle } from './Button.style'

const Button = ({ title, onClick, disabled }) => (
	<ButtonStyle onClick={!disabled ? onClick : () => {}} disabled={disabled ? 'disabled' : undefined}>
		<p>{title}</p>
	</ButtonStyle>
)

export default Button
