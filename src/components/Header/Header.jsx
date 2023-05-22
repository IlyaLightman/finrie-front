import React from 'react'
import { HeaderStyle } from './Header.style'

const Header = () => (
	<HeaderStyle disabled={disabled ? 'disabled' : undefined}>
		<h1>Finrie</h1>
	</HeaderStyle>
)

export default Header
