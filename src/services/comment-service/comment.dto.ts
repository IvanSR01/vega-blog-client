export interface CreateCommentDto {
	content: string

	postId: number
}

export interface UpdateCommentDto extends Partial<CreateCommentDto> {
	id: number
}
