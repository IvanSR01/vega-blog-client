import { fetchHomeData } from '@/$api/home.api'
import Home from '@/screens/home/Home'

const page = async () => {
	const [mostViewedPosts, posts, tags, quote] = await fetchHomeData()
	return (
		<Home
			mostViewedPosts={mostViewedPosts}
			posts={posts}
			tags={tags}
			quote={quote}
		/>
	)
}

export default page
