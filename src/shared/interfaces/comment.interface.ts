import { Post } from "./post.interface"
import { User } from "./user.interface"


export interface Comment {
	id: number
	content: string
	author: User
	post: Post
	createAt: Date
}
