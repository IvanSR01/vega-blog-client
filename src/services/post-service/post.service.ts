import { accessApi } from '@/$api/axios.api'
import { Post } from '@/shared/interfaces/post.interface'
import { CreatePostDto, FindPostDto, UpdatePostDto } from './post.dto'

class PostService {
	async getPosts(credential: FindPostDto): Promise<Post[]> {
		const { data } = await accessApi<Post[]>({
			method: 'GET',
			url: '/post/',
			params: credential
		})
		return data
	}

	async getPostsByTag({ tag, ...credential }: FindPostDto): Promise<Post[]> {
		const { data } = await accessApi<Post[]>({
			method: 'GET',
			url: `/post/by-tag/${tag}`,
			params: { ...credential }
		})
		return data
	}

	async getMostViewedPosts(limit?: number): Promise<Post[]> {
		const { data } = await accessApi<Post[]>({
			method: 'GET',
			url: '/post/most-viewed',
			params: { limit }
		})
		return data
	}

	async getPostById(id: number): Promise<Post> {
		const { data } = await accessApi<Post>({
			method: 'GET',
			url: `/post/by-id/${id}`
		})
		return data
	}

	async createPost(dto: CreatePostDto): Promise<Post> {
		const { data } = await accessApi<Post>({
			method: 'POST',
			url: '/post/new',
			data: dto
		})
		return data
	}

	async updatePost(dto: UpdatePostDto): Promise<Post> {
		const { data } = await accessApi<Post>({
			method: 'PUT',
			url: '/post/update',
			data: dto
		})
		return data
	}

	async deletePost(id: number): Promise<void> {
		await accessApi<void>({
			method: 'DELETE',
			url: `/post/delete/${id}`
		})
	}
}

export default new PostService()
