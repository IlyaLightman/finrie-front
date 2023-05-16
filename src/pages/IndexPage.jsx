import React from 'react'

import RedirectButton from '../components/RedirectButton/RedirectButton'

const IndexPage = () => (
	<>
		<p>Welcome to Finrie!</p>
		<RedirectButton title='Register System' path='/register_system' />
		<RedirectButton title='Login as System' path='/login_system' />
		<RedirectButton title='Register User' path='/register_user' />
		<RedirectButton title='Login as User' path='/login_user' />
	</>
)

export default IndexPage
