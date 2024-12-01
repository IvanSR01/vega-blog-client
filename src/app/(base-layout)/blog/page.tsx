import { fetchBlogData } from '@/$api/blog.api'
import Blog from '@/screens/blog/Blog'
import { FindPostDto } from '@/services/post-service/post.dto'

const page = async ({
	searchParams
}: {
	searchParams: Promise<Omit<FindPostDto, 'tag'>>
}) => {
	const res = await fetchBlogData({
		...(await searchParams)
	})

	return <Blog {...res} />
}
export default page
