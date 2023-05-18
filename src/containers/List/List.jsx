import React from 'react'

import { ListStyle, ListHeaderStyle, ListItemStyle } from './List.style'

const List = ({ rows, Component, columns }) => {
	return (
		<>
			{columns && (
				<ListHeaderStyle>
					{columns.map((column, index) => (
						<div key={index}>
							<p>{column}</p>
						</div>
					))}
				</ListHeaderStyle>
			)}
			<ListStyle>
				{rows &&
					rows.map((row, index) => (
						<ListItemStyle key={index}>
							<Component {...row} />
						</ListItemStyle>
					))}
			</ListStyle>
		</>
	)
}

export default List
