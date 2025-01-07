import postService from '@/services/post-service/post.service'
import quoteService from '@/services/quote-service/quote.service'
import tagService from '@/services/tag-service/tag.service'
import { Post } from '@/shared/interfaces/post.interface'
import { Quote } from '@/shared/interfaces/quote.interface'
import { Tag } from '@/shared/interfaces/tag.interface'

export const fetchHomeData = async (): Promise<
	[Post[], Post[], Tag[], Quote | null]
> => {
	try {
		const res = await Promise.all([
			await postService.getMostViewedPosts(5),
			await postService.getPosts({ limit: 6 }),
			await tagService.getTags(10),
			await quoteService.getRandomQuote()
		])
		return res
	} catch {
		return [[], [], [], null]
	}
}
