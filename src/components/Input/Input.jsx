import React from 'react'
import { InputStyle, SelectStyle, InputWrapperStyle, InputTitleStyle } from './Input.style'

const Input = ({ onChange, value, title, select, invalid }) => {
	return (
		<InputWrapperStyle invalid={invalid ? 'invalid' : undefined}>
			<InputTitleStyle>{title}:</InputTitleStyle>
			{!select ? (
				<InputStyle onChange={onChange} value={value || ''} invalid={invalid ? 'invalid' : undefined} />
			) : (
				<SelectStyle onChange={onChange}>
					{select.map((item, ind) => (
						<option key={ind}>{item}</option>
					))}
				</SelectStyle>
			)}
		</InputWrapperStyle>
	)
}

export default Input
