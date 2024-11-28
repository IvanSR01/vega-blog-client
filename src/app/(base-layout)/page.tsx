import Home from '@/screens/home/Home'
import postService from '@/services/post-service/post.service'
import tagService from '@/services/tag-service/tag.service'

const page = async () => {
	const [mostViewedPosts, posts, tags] = await fetchData()
	return <Home mostViewedPosts={mostViewedPosts} posts={posts} tags={tags} />
}

export default page

const fetchData = async () => {
	try {
		const res = await Promise.all([
			await postService.getMostViewedPosts(5),
			await postService.getPosts({ limit: 10 }),
			await tagService.getTags(10)
		])
		return res
	} catch {
		return [[], [], []]
	}
}
