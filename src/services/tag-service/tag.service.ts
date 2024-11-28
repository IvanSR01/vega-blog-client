import { accessApi } from '@/$api/axios.api'
import { Tag } from '@/shared/interfaces/tag.interface'
import { CreateTagDto, UpdateTagDto } from './tag.dto'

class TagService {
	async getTags(limit?: number): Promise<Tag[]> {
		const { data } = await accessApi<Tag[]>({
			method: 'GET',
			url: `/tag?${limit ? `limit=${limit}` : ''}`
		})
		return data
	}

	async createTag(tag: CreateTagDto): Promise<Tag> {
		const { data } = await accessApi<Tag>({
			method: 'POST',
			url: '/tag/new',
			data: tag
		})
		return data
	}
	async updateTag(dto: UpdateTagDto): Promise<Tag> {
		const { data } = await accessApi<Tag>({
			method: 'PATCH',
			url: '/tag/update',
			data: dto
		})
		return data
	}

	async deleteTag(id: number): Promise<void> {
		await accessApi<void>({
			method: 'DELETE',
			url: `/tag/delete/${id}`
		})
	}
}

export default new TagService()
