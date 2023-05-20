import axios from 'axios'

const instance = axios.create({
	baseURL: 'http://localhost:5000',
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${localStorage.getItem('access_token')}`
	}
})

instance.interceptors.request.use(config => {
	const token = localStorage.getItem('access_token')
	config.headers.Authorization = token ? `Bearer ${token}` : ''
	return config
})

export default instance
