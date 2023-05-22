import styled from 'styled-components'

export const ButtonStyle = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 240px;
	height: 36px;
	background: ${({ disabled }) => (!disabled ? 'rgb(255, 145, 94)' : 'lightgray')};
	border: 0px solid;
	border-radius: 10px;
	padding: 5px;
	transition: 0.3s;
	color: white;
	margin-top: 12px;

	&:hover {
		cursor: pointer;
		background: ${({ disabled }) => (!disabled ? 'rgb(255, 98, 114)' : 'lightgray')};
	}
`
