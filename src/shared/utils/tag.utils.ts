export const parseTag = (tag: string) => tag.replaceAll(' ', '+')

export const unParseTag = (tag: string) => tag.replaceAll('%2B', ' ')
