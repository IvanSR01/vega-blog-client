import { defaultApi } from '@/$api/axios.api'
import { Quote } from '@/shared/interfaces/quote.interface'

class QuoteService {
	async getRandomQuote() {
		return (
			await defaultApi<Quote>({
				method: 'GET',
				url: '/quote/random-quote'
			})
		).data
	}
}

export default new QuoteService()
