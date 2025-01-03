import { TypeTokens } from '@/shared/types/tokens.type'
import Cookies from 'js-cookie'

const getTokens = (): TypeTokens => ({
	accessToken: Cookies.get('access-token'),
	refreshToken: Cookies.get('refresh-token')
})

const saveTokens = ({ accessToken, refreshToken }: TypeTokens) => {
	Cookies.set('access-token', accessToken ? accessToken : '')
	Cookies.set('refresh-token', refreshToken ? refreshToken : '')
}

const removeTokens = () => {
	Cookies.remove('access-token')
	Cookies.remove('refresh-token')
}

export { getTokens, saveTokens, removeTokens }
