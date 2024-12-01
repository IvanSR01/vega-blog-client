import { accessApi, defaultApi } from '@/$api/axios.api'
import { User } from '@/shared/interfaces/user.interface'

class UserService {
	async findAll(search?: string, limit?: number): Promise<User[]> {
		const { data } = await accessApi<User[]>({
			method: 'GET',
			url: `/user?${limit ? `limit=${limit}` : ''}`,
			params: { search }
		})
		return data
	}

	async findOne(id: number): Promise<User> {
		const { data } = await defaultApi<User>({
			method: 'GET',
			url: `/user/by-id/${id}`
		})

		return data
	}

	async profile(): Promise<User> {
		const { data } = await accessApi<User>({
			method: 'GET',
			url: '/user/info-profile'
		})
		return data
	}

	async toggleSubscribe(id: number): Promise<void> {
		await accessApi<void>({
			method: 'POST',
			url: `/user/toggle-subscribe/${id}`
		})
	}

	async updateProfile(dto: User): Promise<User> {
		const { data } = await accessApi<User>({
			method: 'PUT',
			url: '/user/update-profile',
			data: dto
		})
		return data
	}

	async deleteProfile(): Promise<void> {
		await accessApi<void>({
			method: 'DELETE',
			url: '/user/delete-profile'
		})
	}
}

export default new UserService()
