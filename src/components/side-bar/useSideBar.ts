import postService from '@/services/post-service/post.service'
import tagService from '@/services/tag-service/tag.service'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

export const useSideBar = () => {
	const { data: popularPosts, isLoading: loadingPopularPost } = useQuery({
		queryKey: ['popular-post'],
		queryFn: () => postService.getMostViewedPosts(6)
	})

	const { data: popularTags, isLoading: loadingPopularTag } = useQuery({
		queryKey: ['popular-tags'],
		queryFn: () => tagService.getTags(4)
	})

	return useMemo(
		() => ({
			popularPosts,
			popularTags,
			isLoading: loadingPopularPost || loadingPopularTag
		}),
		[popularPosts, popularTags, loadingPopularPost, loadingPopularTag]
	)
}
