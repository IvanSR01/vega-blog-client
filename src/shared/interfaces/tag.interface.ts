import { Post } from './post.interface'

export interface Tag {
	id: number
	name: string
	postCount: number
	posts: Post[]
}
