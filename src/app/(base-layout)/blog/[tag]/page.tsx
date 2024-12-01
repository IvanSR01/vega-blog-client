import { fetchBlogData } from '@/$api/blog.api'
import Blog from '@/screens/blog/Blog'
import { FindPostDto } from '@/services/post-service/post.dto'

const page = async ({
	searchParams,
	params
}: {
	searchParams: Promise<Omit<FindPostDto, 'tag'>>
	params: Promise<{ tag: string }>
}) => {
	const res = await fetchBlogData({
		...(await searchParams),
		tag: (await params)?.tag
	})

	return <Blog {...res} />
}
export default page
