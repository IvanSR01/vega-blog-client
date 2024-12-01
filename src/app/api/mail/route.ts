import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function handlePostRequest(request: NextRequest) {
	const requestBody = await request.json()
	const { email, subject, message } = requestBody

	try {
		const transporter = nodemailer.createTransport({
			service: process.env.EMAIL_SERVICE,
			auth: {
				user: process.env.EMAIL_USERNAME,
				pass: process.env.EMAIL_PASSWORD
			}
		})

		await transporter.sendMail({
			from: email,
			to: process.env.EMAIL_RECIPIENT,
			subject,
			text: message
		})

		return NextResponse.json({ message: 'Email sent successfully' })
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
	}
}
