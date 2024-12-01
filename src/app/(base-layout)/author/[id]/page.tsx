import Author from '@/screens/author/Author'
import NotFound from '@/screens/not-found/NotFound'
import postService from '@/services/post-service/post.service'
import userService from '@/services/user-service/user.service'
import { Post } from '@/shared/interfaces/post.interface'
import { User } from '@/shared/interfaces/user.interface'

const fetchData = async (id: number): Promise<[User | null, Post[]]> => {
	try {
		return await Promise.all([
			await userService.findOne(id),
			await postService.getPostsByAuthor(id)
		])
	} catch (e) {
		console.log(e)
		return [null, []]
	}
}

export const generateStaticParams = async () => {
	try {
		const users = await userService.findAll()
		return users.map(user => ({ id: user.id.toString() }))
	} catch {
		return []
	}
}

const page = async ({ params }: { params: Promise<{ id: number }> }) => {
	const { id } = await params
	const [user, posts] = await fetchData(+id)

	if (!user) return <NotFound />

	return <Author user={user} posts={posts} />
}
export default page
