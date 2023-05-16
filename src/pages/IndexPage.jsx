import React from 'react'

import Button from '../components/Button/Button'
import Input from '../components/Input/Input'

const IndexPage = () => (
	<>
		<p>Welcome to Finrie!</p>
		<Input title='Username' value='Hello' />
		<Input title='Value' value='1000' />
		<Button title='Click me!' />
		<Button title='Click me!' />
		<Button title='Click me!' />
		<Button title='Click me!' />
	</>
)

export default IndexPage
