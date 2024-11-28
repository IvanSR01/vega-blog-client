import { accessApi } from '@/$api/axios.api'
import { Post } from '@/shared/interfaces/post.interface'

export class PostReactionService {
	async getLikedPosts(): Promise<Post[]> {
		return (
			await accessApi<Post[]>({
				method: 'GET',
				url: '/post/post-reaction/like-posts'
			})
		).data
	}

	async getFavoritePosts(): Promise<Post[]> {
		return (
			await accessApi<Post[]>({
				method: 'GET',
				url: '/post/post-reaction/favorite-posts'
			})
		).data
	}

	async toggleLike(postId: number): Promise<void> {
		await accessApi<void>({
			method: 'POST',
			url: `/post/post-reaction/like/${postId}`
		})
	}
	async toggleDislike(postId: number): Promise<void> {
		await accessApi<void>({
			method: 'POST',
			url: `/post/post-reaction/dislike/${postId}`
		})
	}

	async toggleFavorite(postId: number): Promise<void> {
		await accessApi<void>({
			method: 'POST',
			url: `/post/post-reaction/favorite/${postId}`
		})
	}
}

export default new PostReactionService()
