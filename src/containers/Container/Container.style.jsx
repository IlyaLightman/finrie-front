import styled from 'styled-components'

export const ContainerStyle = styled.div`
	display: flex;
	width: 380px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	transition: 0.2s;
	border: 0px solid black;
	border-radius: 16px;
	background: white;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 16px;
	padding: 12px 12px 40px 12px;

	&:hover {
		box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px;
	}
`
