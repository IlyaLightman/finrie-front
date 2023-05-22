import useAuth from './authBase.hook'

const useSystemAuth = () => {
	const {
		login: loginSystem,
		register: registerSystem,
		setContext: setSystemContext,
		logout: logoutSystem,
		...rest
	} = useAuth('system')

	return {
		loginSystem,
		registerSystem,
		setSystemContext,
		logoutSystem,
		...rest
	}
}

export default useSystemAuth
