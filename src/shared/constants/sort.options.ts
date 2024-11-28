export const sortOptions: SortOption[] = [
  { label: "Title (A-Z)", value: "title_ASC" },
  { label: "Title (Z-A)", value: "title_DESC" },
  { label: "Content (ascending)", value: "content_ASC" },
  { label: "Content (descending)", value: "content_DESC" },
  { label: "Date (newest first)", value: "createdAt_DESC" },
  { label: "Date (oldest first)", value: "createdAt_ASC" },
  { label: "Views (ascending)", value: "viewCount_ASC" },
  { label: "Views (descending)", value: "viewCount_DESC" },
] as const

export type SortOption = {
	label: string;
	value: string;
}