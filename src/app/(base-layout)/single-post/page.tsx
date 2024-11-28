import NotFound from '@/screens/not-found/NotFound'
import PostById from '@/screens/post-by-id/PostById'
import commentService from '@/services/comment-service/comment.service'
import postService from '@/services/post-service/post.service'
import { Comment } from '@/shared/interfaces/comment.interface'
import { Post } from '@/shared/interfaces/post.interface'
import type { NextPage } from 'next'

const page: NextPage = async () => {
	const fetchResult = await fetchPost()

	if (!fetchResult?.post) return <NotFound />

	const { post, comments } = fetchResult

	return <PostById post={post} comments={comments} />
}

export default page

const fetchPost = async (): Promise<{
	post: Post | null
	comments: Comment[]
} | null> => {
	try {
		const posts = await postService.getMostViewedPosts(1)
		const post = posts.length ? posts[0] : null

		if (!post) return { post: null, comments: [] }

		const comments = await commentService.getCommentsByPostId(post.id)

		return { post, comments }
	} catch (error) {
		console.error(error)
		return null
	}
}
