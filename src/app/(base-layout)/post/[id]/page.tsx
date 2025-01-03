// import PostById from "@/screens/post-by-id/PostById";
import NotFound from '@/screens/not-found/NotFound'
import PostById from '@/screens/post-by-id/PostById'
import commentService from '@/services/comment-service/comment.service'
import postService from '@/services/post-service/post.service'
import { Comment } from '@/shared/interfaces/comment.interface'
import { Post } from '@/shared/interfaces/post.interface'

const fetchById = async (id: number): Promise<[Post | null, Comment[]]> => {
	try {
		return await Promise.all([
			await postService.getPostById(+id),
			await commentService.getCommentsByPostId(+id)
		])
	} catch (error) {
		console.log(error)
		return [null, []]
	}
}

export const generateStaticParams = async () => {
	try {
		const posts = await postService.getPosts({
			limit: 100
		})
		return posts.map(post => ({ id: post.id.toString() }))
	} catch (error) {
		console.log(error)
		return []
	}
}

export const generateMetadata = async ({
	params
}: {
	params: Promise<{ id: number }>
}) => {
	try {
		const { id } = await params
		const post = await postService.getPostById(id)

		return {
			title: post?.title || 'Not found',
			description: post.content.slice(0, 100),
			keywords: [
				post?.tag?.name,
				'Vega Blog',
				'technology',
				'programming',
				'personal growth',
				'articles',
				'insights'
			]
		}
	} catch (error) {
		console.log(error)

		return { title: 'Not found' }
	}
}

const page = async ({ params }: { params: Promise<{ id: number }> }) => {
	const { id } = await params

	const [post, comments] = await fetchById(id)

	if (!post) return <NotFound />

	return <PostById post={post} comments={comments} />
}
export default page
