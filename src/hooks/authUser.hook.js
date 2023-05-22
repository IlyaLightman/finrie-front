import useAuth from './authBase.hook'

const useUserAuth = () => {
	const {
		login: loginUser,
		register: registerUser,
		setContext: setUserContext,
		logout: logoutUser,
		...rest
	} = useAuth('user')

	return {
		loginUser,
		registerUser,
		setUserContext,
		logoutUser,
		...rest
	}
}

export default useUserAuth
