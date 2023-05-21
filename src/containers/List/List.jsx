import React, { useState } from 'react'

import { ListStyle, ListHeaderStyle, ListItemStyle } from './List.style'
import Button from '../../components/Button/Button'

const List = ({ rows, Component, columns, rowsPerPage }) => {
	const [page, setPage] = useState(0)
	rowsPerPage = rowsPerPage || rows.length
	const pages = Math.ceil(rows.length / rowsPerPage)

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
					rows.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((row, index) => (
						<ListItemStyle key={index}>
							<Component {...row} />
						</ListItemStyle>
					))}
			</ListStyle>

			{page !== pages - 1 && <Button title='Next page' onClick={() => setPage(page + 1)} />}
			{page !== 0 && <Button title='Previous page' onClick={() => setPage(page - 1)} />}
		</>
	)
}

export default List
