import { defaultApi } from '@/$api/axios.api'
import { getTokens, saveTokens } from '@/shared/cookie/tokens.cookie'
import { AuthResponse } from '@/shared/interfaces/auth-response.interface'
import { TypeLogin, TypeRegister } from '@/shared/types/auth.type'
import { TypeTokens } from '@/shared/types/tokens.type'

class AuthService {
	private saveTokensToCookies = (data: TypeTokens | null): void => {
		if (data?.accessToken)
			saveTokens({
				accessToken: data.accessToken,
				refreshToken: data.refreshToken
			})
	}

	async login(credential: TypeLogin) {
		const { data } = await defaultApi<AuthResponse>({
			method: 'POST',
			url: '/auth/login',
			data: credential
		})

		this.saveTokensToCookies(data.tokens)

		return data
	}

	async register(credential: TypeRegister) {
		const { data } = await defaultApi<AuthResponse>({
			method: 'POST',
			url: '/auth/register',
			data: credential
		})

		this.saveTokensToCookies(data.tokens)
		return data
	}
	async updateTokens() {
		const { refreshToken } = getTokens()
		const { data } = await defaultApi<TypeTokens>({
			method: 'POST',
			url: '/auth/refresh-token',
			data: {
				refreshToken
			}
		})
		this.saveTokensToCookies(data)
		return data
	}
}

export default new AuthService()
