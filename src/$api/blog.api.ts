import { FindPostDto } from '@/services/post-service/post.dto'
import postService from '@/services/post-service/post.service'
import { unParseTag } from '@/shared/utils/tag.utils'

export const fetchBlogData = async ({
	tag,
	search,
	limit,
	...rest
}: FindPostDto) => {
	try {
		const requestData = {
			tag: tag ? unParseTag(tag as string) : '',
			search,
			limit: limit ? +limit : 5,
			...rest
		}

		const posts = tag
			? await postService.getPostsByTag(requestData)
			: await postService.getPosts(requestData)
		return {
			posts
		}
	} catch (error) {
		console.log(error)
		return {
			posts: [],
			tags: []
		}
	}
}
