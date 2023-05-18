import styled from 'styled-components'

export const ListStyle = styled.div`
	width: 380px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const ListHeaderStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 320px;
	height: 40px;

	p {
		color: gray;
	}
`

export const ListItemStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 320px;
	height: 40px;
	border: 1px solid gray;
	border-radius: 12px;
	margin: 8px;
	padding: 0 12px 0 12px;
`
