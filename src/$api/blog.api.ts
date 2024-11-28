import { FindPostDto } from '@/services/post-service/post.dto'
import postService from '@/services/post-service/post.service'
import tagService from '@/services/tag-service/tag.service'
import { cleanTag } from '@/shared/utils/cleanTag'

export const fetchBlogData = async ({
	tag,
	search,
	limit,
	...rest
}: FindPostDto) => {
	try {
		const requestData = {
			tag: tag ? cleanTag(tag as string) : '',
			search,
			limit: limit ? +limit : 5,
			...rest
		}

		const posts = tag
			? await postService.getPostsByTag(requestData)
			: await postService.getPosts(requestData)
		const tags = await tagService.getTags(50)
		return {
			posts,
			tags
		}
	} catch (error) {
		console.log(error)
		return {
			posts: [],
			tags: []
		}
	}
}
