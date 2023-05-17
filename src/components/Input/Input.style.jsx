import styled from 'styled-components'

export const InputStyle = styled.input`
	width: 420px;
	height: 32px;
	border: 0px solid black;
	background: ${({ invalid }) => (!invalid ? 'rgba(0, 0, 0, .06)' : 'rgba(255, 0, 0, 0.1)')};
	border-radius: 10px;
	padding: 4px 0 4px 12px;

	&:hover {
		background: ${({ invalid }) => (!invalid ? 'rgba(0, 0, 0, .12)' : 'rgba(175, 0, 0, 0.15)')};
	}
`

export const SelectStyle = styled.select`
	width: 420px;
	height: 32px;
	border: 0px solid black;
	background: rgba(0, 0, 0, 0.06);
	border-radius: 10px;
	padding: 4px 0 4px 12px;

	&:hover {
		background: rgba(0, 0, 0, 0.12);
	}
`

export const InputTitleStyle = styled.p`
	width: 220px;
	padding-right: 6px;
`

export const InputWrapperStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	width: 90%;
	margin-top: 4px;

	color: ${({ invalid }) => (!invalid ? 'black' : 'rgba(200, 0, 0, 0.6)')};
`
