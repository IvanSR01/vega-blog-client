export const formatDate = (date: string | Date) => {
	const newDate = new Date(date)
	return newDate.toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	})
}
