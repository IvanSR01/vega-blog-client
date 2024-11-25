export interface CreatePostDto {
  title: string;
  content: string;
  cover: string;
  tag?: string;
  likes?: number;
  dislikes?: number;
}

export interface UpdatePostDto extends Partial<CreatePostDto> {
  id: number;
}

export interface FindPostDto {
	limit?: number
	tag?: string
	search?: string
	sort?: string
}