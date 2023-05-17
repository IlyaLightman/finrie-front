import { useState } from 'react'

const useSetUser = () => {
	const [user, setUser] = useState(null)

	return { user, setUser }
}

export default useSetUser
