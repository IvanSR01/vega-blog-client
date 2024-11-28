export interface CreateTagDto {
  name: string;
}

export interface UpdateTagDto extends Partial<CreateTagDto> {
  id: number;
}
