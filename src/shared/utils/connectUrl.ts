export const connectUrl = (url: string, ...rest: string[]) =>
	`${url}${rest.join('')}`.replace('%3F', ' ')
