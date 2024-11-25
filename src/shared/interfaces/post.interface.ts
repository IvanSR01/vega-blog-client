import { Comment } from "./comment.interface"
import { Tag } from "./tag.interface"
import { User } from "./user.interface"

export interface Post {
	id: number
	title: string
	content: string
	author: User
	cover: string
	tag: Tag
	likes: User[]
	dislikes: User[]
	comments: Comment[]
	viewCount: number
	createdAt: Date
}
