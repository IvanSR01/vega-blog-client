import { Comment } from "./comment.interface"
import { Post } from "./post.interface"

export interface User {
	id: number
	firstName: string
	lastName: string
	middleName?: string
	email: string
	password: string
	role: Role
	jobTitle: string
	description: string
	social?: {
		facebook?: string
		twitter?: string
		instagram?: string
		youtube?: string
	}
	avatar: string
	subscribers: User[]
	subscriptions: User[]
	likes: Post[]
	dislikes: Post[]
	favorites: Post[]
	posts: Post[]
	comments: Comment[]
}
export enum Role {
	User = 'user',
	AdminLevelOne = 'admin-level-one',
	AdminLevelTwo = 'admin-level-two'
}

