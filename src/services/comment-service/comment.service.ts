import { accessApi } from '@/$api/axios.api'
import { Comment } from '@/shared/interfaces/comment.interface'
import { CreateCommentDto, UpdateCommentDto } from './comment.dto'

class CommentService {
	async getCommentsByPostId(postId: number): Promise<Comment[]> {
		const { data } = await accessApi<Comment[]>({
			method: 'GET',
			url: `/comment/post/${postId}`
		})
		return data
	}
	async getCurrentUserComments(): Promise<Comment[]> {
		const { data } = await accessApi<Comment[]>({
			method: 'GET',
			url: `/comment/get-current-user-comments`
		})
		return data
	}

	async createComment(comment: CreateCommentDto): Promise<void> {
		await accessApi<void>({
			method: 'POST',
			url: '/comment/new',
			data: comment
		})
	}

	async updateComment(comment: UpdateCommentDto): Promise<void> {
		await accessApi<void>({
			method: 'PUT',
			url: '/comment/update',
			data: comment
		})
	}

	async deleteComment(commentId: number): Promise<void> {
		await accessApi<void>({
			method: 'DELETE',
			url: `/comment/delete/${commentId}`
		})
	}
}

export default new CommentService()
