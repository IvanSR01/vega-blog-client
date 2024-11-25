export const sortOptions: SortOption[] = [
  { label: "Title (A-Z)", value: "title_ASC" },
  { label: "Title (Z-A)", value: "title_DESC" },
  { label: "Content (ascending)", value: "content_ASC" },
  { label: "Content (descending)", value: "content_DESC" },
  { label: "Date (newest first)", value: "date_DESC" },
  { label: "Date (oldest first)", value: "date_ASC" },
  { label: "Views (ascending)", value: "views_ASC" },
  { label: "Views (descending)", value: "views_DESC" },
] as const

export type SortOption = {
	label: string;
	value: string;
}