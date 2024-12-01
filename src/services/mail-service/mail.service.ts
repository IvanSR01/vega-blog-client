import { MailDto } from './mail.dto'

class MailService {
	async sendMail(p: MailDto) {
		await fetch('/api/mail', { method: 'POST', body: JSON.stringify(p) })
	}
}

export default new MailService()
